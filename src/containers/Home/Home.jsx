import React from 'react'
import Button from '../../components/Button/Button'


function Home(props) {
  return (
    <div className="homeContainer">
      <p>Vista Home</p>
      <div className="buttonRegister">
      <Button name="Registro"/> 
      </div>
      <div className="buttonLogin">
      <Button name="Login"/> 
      </div>
    </div>
  )
}

export default Home
