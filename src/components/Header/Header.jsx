import React from 'react'
import dogHeader from "../../img/dogHeader.png";

function Header(props) {
  return (
    <div className="headerComponent">
      <img className="logo" src={dogHeader} alt="DogHeader"/>
      <div className="title">Soy el titulo</div>
      <div className="loginHeader">Soy el boton login</div>
    </div>
  )
}

export default Header
