import React, { useState } from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import PersonalButton from "../../components/PersonalButton/PersonalButton";
import Footer from "../../components/Footer/Footer";
import { useHistory, useLocation } from "react-router";
import {port, adopter} from "../../api/ApiSQL";
import axios from "axios";
import validate from "../../tools/validate";


function Register(props) {
  
  // HOOKS

  
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const sitter = Boolean(params.get('sitter'))
  
  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    sitter: sitter
  });

  console.log(user.sitter)

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
      password: user.password,
      sitter: user.sitter
    }
    console.log(body)
      
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
        <Header/>
        <div className="navbarComponent"></div>

        <form className="registerForm" onSubmit={toggle}>
            <h2>Lover Registration</h2>
            <p>We need your data</p>
            <p>For make money</p>
            <div className="input">
              <InputForm 
                type="text"
                title="Username"
                name="username"
                onChange={handleState}
                error={errors.username?.help}
                value={user.username}
              />
            </div>
            <div className="input">
              <InputForm 
                type="text"
                title="Email"
                name="email"
                onChange={handleState}
                error={errors.email?.help}
                value={user.email}
              />
            </div>
            <div className="input">
              <InputForm 
                type="text"
                title="Password"
                name="password"
                onChange={handleState}
                error={errors.password?.help}
                value={user.password}
              />
            </div>
            <div className="submit">
              <PersonalButton name="Submit"/> 
            </div>
            <div className="closeForm"></div>
        </form>

        <div className="spaceBar"></div>
        <div className="spaceBar"></div>
        <div className="spaceBar"></div>
        <Footer/>





      </div>
    )
}


export default Register;


/*
            <InputForm 
              type="text"
              title="FirstName"
              name="firstName"
              onChange={handleState}
              error={errors.firstName?.help}
              value={user.firstName}
            />
            </div>
*/
