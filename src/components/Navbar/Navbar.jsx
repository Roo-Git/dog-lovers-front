import React from 'react'
import Button from '../Button/Button';

function Navbar(props) {
  return (
    <div className="navbarComponent">

      <div className="loginNavbar">
        <Button name="Iniciar Sesión"/>
      </div>
      
      <div className="registerNavbar">
        <Button name="Regístrate"/>
      </div>
      

      
    </div>
  )
}

export default Navbar
