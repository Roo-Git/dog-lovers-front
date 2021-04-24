import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/Button/Button'


function Home(props) {

  // HOOKS
  let history = useHistory();


  // FUNCTIONS

  let goToRegister = () => {
    setTimeout(() =>{
        history.push('/register')
    },1000);
  };

  return (
    <div className="homeContainer">
      <p>Vista Home</p>
      <div className="buttonRegister" onClick={() => goToRegister()}>
      <Button name="Registro"/> 
      </div>
      <div className="buttonLogin">
      <Button name="Login"/> 
      </div>
    </div>
  )
}

export default Home
