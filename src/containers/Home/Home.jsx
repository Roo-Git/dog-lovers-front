import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';


function Home(props) {

  // HOOKS
  let history = useHistory();


  // FUNCTIONS

  let goToRegister = () => {
    setTimeout(() =>{
        history.push('/register')
    },1000);
  };

  let goToLogin = () => {
    setTimeout(() =>{
      history.push('/login')
    },1000);
  };

  return (
    <div className="homeContainer">
      <Header/>
      <Navbar/>
      <div className="buttonRegister" onClick={() => goToRegister()}>
      <Button name="Registro"/> 
      </div>
      <div className="buttonLogin">
      <Button name="Login" onClick={() => goToLogin()}/> 
      </div>
      
    </div>
  )
}

export default Home
