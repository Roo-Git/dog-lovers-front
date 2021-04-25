import React, { useState }from 'react'
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router';
import {port, adopter, login} from '../../api/ApiSQL';
import axios from 'axios';
import validate from "../../tools/validate";

function Login(props) {
  
  // HOOKS

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState([]);

  // HANDLERS

  const handleState = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
    if (Object.keys(errors).length > 0) 
    setErrors(validate({ ...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value}, "register"));    
  };

  // FUNCTIONS

  const toggle = async () => {

    const errs = validate(credentials, "login");
    setErrors(errs);

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

      <div className="inputFormMasterLogin">
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

      <div className="sendDataLogin">
          <Button name="Enviar" onClick={() => toggle()}/>
      </div>

    </div>
  )
}

export default Login
