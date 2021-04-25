import React, { useState } from 'react'
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router'
import {port, adopter} from '../../api/ApiSQL';
import axios from 'axios'


function Register(props) {
  
  // HOOKS
  
  const history = useHistory();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // HANDLERS

  const handleState = (e) => {
    setUser({...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
  
 }

 // FUNCTIONS
 
  const toggle = async () => {
  
  let body = {
    email: user.email,
    password: user.password
  }
    
  try {
    let result = await axios.post(port+adopter, body)
    console.log(result, "Usuario creado con exito")
    if(result){
      history.push('/')
    }
    
  } catch (error) {
     console.error(error, "El usuario ya existe")
  }

};

  return (
    <div className="registerContainer">

      <p>Vista Register</p>

      <div className="inputFormMaster">
          <InputForm 
            type='text'
            title="Email"
            name="email"
            onChange={handleState}
          />
          <InputForm 
            type='text'
            title="Password"
            name='password'
            onChange={handleState}
          />
          <div className="sendData">
            <Button name="Enviar" onClick={() => toggle()}/>
          </div>
      </div>
    </div>
  )
}


export default Register;
