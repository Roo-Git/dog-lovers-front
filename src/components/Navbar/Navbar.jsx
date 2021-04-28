import React from 'react'
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';

function Navbar(props) {


    // HOOKS
    let history = useHistory();

    // FUNCTIONS
  
    let goToChoice = () => {
      setTimeout(() =>{
          history.push('/choice')
      },1000);
    };
  
    let goToLogin = () => {
      setTimeout(() =>{
        history.push('/login')
      },1000);
    };


  return (
    <div className="navbarComponent">
      
      {
        !props.user.id
        ?
        <>
          <div className="loginNavbar" onClick={() => goToLogin()}>
            <Button name="Sign in"/>
          </div>

          <div className="registerNavbar" onClick={() => goToChoice()}>
            <Button name="Sign up"/>
          </div>
        </>
        :
        <>
          <div className="usernameRedux">Hola! {props.user.username}</div>
        </>
      }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(Navbar);
