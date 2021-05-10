import React from 'react'
import { useHistory } from 'react-router-dom';
import PersonalButton from '../PersonalButton/PersonalButton';
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/userType';
import { DOGLOGOUT } from '../../redux/types/dogType';
import { REQUESTLOGOUT } from '../../redux/types/requestType';




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

    const logout = () => {
      props.dispatch({ type: LOGOUT, payload : {}});
      props.dispatch({ type: DOGLOGOUT, payload : {}});
      props.dispatch({ type: REQUESTLOGOUT, payload : {}});
      
      
      setTimeout(()=> {
          history.push('/');
      });
    }


  return (
    <div className="navbarComponent">
      
      {
        !props.user.id
        ?
        <>
          <div className="navbar-space">Hola</div>

          <div className="login-navbar" onClick={() => goToLogin()}>
            <PersonalButton name="Sign in"/>
          </div>

          <div className="register-navbar" onClick={() => goToChoice()}>
            <PersonalButton name="Sign up"/>
          </div>
        </>
        :
        <>
          <div className="navbar-space"></div>

          <div className="logout-navbar" onClick={() => logout()}>
            <PersonalButton name="Logout"/>
          </div>
          <div className="username-redux">Wellcome {props.user.username}</div>
        </>
      }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      dog: state.dogReducer.dog,
      request: state.requestReducer.request,
  }
}

export default connect(mapStateToProps)(Navbar);
