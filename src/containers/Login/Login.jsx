import React, { useState } from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import PersonalButton from '../../components/PersonalButton/PersonalButton';
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router";
import {port, adopter, login} from "../../api/ApiSQL";
import axios from "axios";
import validate from "../../tools/validate";
import {connect} from 'react-redux';
import { LOGIN } from '../../redux/types/userType';
import { SHOW } from '../../redux/types/dogType';
import { ADD_LIST } from "../../redux/types/requestType";
import { ADD } from "../../redux/types/candidateType";


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
        //props.dispatch({type: SHOW, payload: result.data.Dogs});
        //props.dispatch({type: ADD_LIST, payload: result.data.CareRequests});
        //props.dispatch({type: ADD, payload: result.data.Candidates});
        if(result.data){
          history.push('/');
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
        <Header/>
        <div className="navbarComponent"></div>

        <form className="loginForm" onSubmit={toggle}>
          <h2>Lover Login</h2>
          <p>We need your data</p>
          <p>For make money</p>
          <div className="input">
            <InputForm 
                type='text'
                title="Email"
                name="email"
                onChange={handleState}
                error={errors.email?.help ? errors.email.help : message}
                value={credentials.email.help}
                
              />
          </div>
          <div className="input">
            <InputForm 
                type='text'
                title="Password"
                name='password'
                onChange={handleState}
                error={errors.password?.help ? errors.password.help : message}
                value={credentials.password}

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
        <div className="spaceBar"></div>
        <div className="spaceBar"></div>
        
        <Footer/>
      </div>
    )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      dog : state.dogReducer.dog,
      request: state.requestReducer.request,
      candidate: state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Login);
