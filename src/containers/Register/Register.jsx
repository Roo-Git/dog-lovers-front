import React, { useState } from 'react'
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router'
import {port, adopter} from '../../api/ApiSQL';
import axios from 'axios'
import validate from "../../tools/validate";


function Register(props) {
  
  // HOOKS
  
  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState([]);

  // HANDLERS

  const handleState = (e) => {
    setUser({...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
    if (Object.keys(errors).length > 0) 
    setErrors(validate({ ...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value}, "register"));
  
 };

 // FUNCTIONS
 
  const toggle = async () => {

    const errs = validate(user, "register");
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;
  
    let body = {
      username: user.username,
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
      setMessage('El usuario ya existe.')
    }

  };

    return (
      <div className="registerContainer">

        <p>Vista Register</p>

        <div className="inputFormMaster">
            <InputForm 
              type='text'
              title="Nombre de Usuario"
              name='username'
              onChange={handleState}
              error={errors.username?.help}
            />
            <InputForm 
              type='text'
              title="Email"
              name="email"
              onChange={handleState}
              error={errors.email?.help}
            />
            <InputForm 
              type='text'
              title="Password"
              name='password'
              onChange={handleState}
              error={errors.password?.help}
            />
        </div>

        <div className="sendData">
            <Button name="Enviar" onClick={() => toggle()}/>
        </div>

      </div>
    )
}


export default Register;
