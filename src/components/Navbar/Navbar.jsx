import React from 'react'
import Button from '../Button/Button';
import { useHistory } from 'react-router';

function Navbar(props) {

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
    <div className="navbarComponent">

      <div className="loginNavbar" onClick={() => goToLogin()}>
        <Button name="Iniciar Sesión"/>
      </div>

      <div className="registerNavbar" onClick={() => goToRegister()}>
        <Button className="registerNavbar" name="Regístrate"/>
      </div>
      

      
    </div>
  )
}

export default Navbar
