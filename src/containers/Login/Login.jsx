import React, { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router";
import {port, adopter, login} from "../../api/ApiSQL";
import axios from "axios";
import validate from "../../tools/validate";
import {LOGIN} from '../../redux/types/userType'
import {connect} from 'react-redux';


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

  const toggle = async (ev) => {
    
    ev.preventDefault()

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
        props.dispatch({type: LOGIN, payload: result.data});
        if(result.data){
          history.push('/user');
        }else{
          history.push('/')
        };
      };
    }catch (error){
      setMessage("Email o password incorrecto")
    }

  }

    return (
      <div className="loginContainer">

        <p>Vista Login</p>

        <form className="inputFormMasterLogin" onSubmit={toggle}>
            <InputForm 
              type='text'
              title="Email"
              name="email"
              onChange={handleState}
              error={errors.email?.help ? errors.email.help : message}
              value={credentials.email.help}
              
            />
            <InputForm 
              type='text'
              title="Password"
              name='password'
              onChange={handleState}
              error={errors.password?.help ? errors.password.help : message}
              value={credentials.password}

            />

            <Button name="Enviar"/>
        </form>

      </div>
    )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(Login);
