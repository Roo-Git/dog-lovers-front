import React from 'react'
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/Button/Button';

function Register(props) {
  return (
    <div className="registerContainer">
      <p>Vista Register</p>
      <div className="inputFormMaster">
          <InputForm 
          type='text'
          title="Email"
          />
          <InputForm 
          type='text'
          title="Password"
          />
          <div className="sendData">
          <Button name="Enviar"/>
          </div>
      </div>
    </div>
  )
}

export default Register
