import React, { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router";
import {port, adopter} from "../../api/ApiSQL";
import axios from "axios";
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

  // HANDLERS

  const handleState = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    if (Object.keys(errors).length > 0) 
    setErrors(validate({ ...user, [e.target.name]: e.target.value}, "register"));
  
 };

 // FUNCTIONS
 
  const toggle = async (ev) => {
    
    ev.preventDefault()

    const errs = validate(user, "register");
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }
  
    let body = {
      username: user.username,
      email: user.email,
      password: user.password
    }
      
    try {
      let result = await axios.post(port+adopter, body)
      console.log(result, "Usuario creado con exito")
      if(result){
        history.push('/login')
      }
      
    } catch (error) {
      console.log(error, "El usuario no ha podido ser creado");
    }

  };

    return (
      <div className="registerContainer">

        <p>Vista Register</p>

        <form className="inputFormMaster" onSubmit={toggle}> 
            <InputForm 
              type="text"
              title="Nombre de Usuario"
              name="username"
              onChange={handleState}
              error={errors.username?.help}
              value={user.username}
            />
            <InputForm 
              type="text"
              title="Email"
              name="email"
              onChange={handleState}
              error={errors.email?.help}
              value={user.email}
            />
            <InputForm 
              type="text"
              title="Password"
              name="password"
              onChange={handleState}
              error={errors.password?.help}
              value={user.password}
            />
           
            <Button name="Enviar"/>
          
        </form>


      </div>
    )
}


export default Register;
