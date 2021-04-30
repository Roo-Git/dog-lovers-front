import React from 'react'
import { useHistory } from 'react-router-dom';
import PersonalButton from '../PersonalButton/PersonalButton';
import {connect} from 'react-redux';
import MenuMaterialUi from '../../components/MenuMaterialUi/MenuMaterialUi';

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
            <PersonalButton name="Sign in"/>
          </div>

          <div className="registerNavbar" onClick={() => goToChoice()}>
            <PersonalButton name="Sign up"/>
          </div>
        </>
        :
        <>
          <MenuMaterialUi></MenuMaterialUi>
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
