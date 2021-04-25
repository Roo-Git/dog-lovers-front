import React, { useState }from 'react'
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router';
import {port, adopter, login} from '../../api/ApiSQL';
import axios from 'axios';

function Login(props) {
  
  // HOOKS

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // HANDLERS

  const handleState = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
  
  };

  // FUNCTIONS

  const toggle = async () => {

    let body = {
      email: credentials.email,
      password: credentials.password
    };

    try{
      let result = await axios.post(port+adopter+login, body)
      console.log(result, "Usuario logeado con exito")
      if(result){
        history.push('/user')
      }
    }catch (error){
      console.log(error, "El usario no ha poido ser logeado")
    }

  }

  return (
    <div className="loginContainer">

      <p>Vista Login</p>

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

export default Login
