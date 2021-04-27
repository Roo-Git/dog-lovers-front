import React from 'react'
import Header from '../../components/Header/Header'
import sitter from '../../img/sitter.png'
import owner from '../../img/owner.png'
import Footer from '../../components/Footer/Footer'
import { useHistory } from 'react-router';

function Choice(props) {

  // HOOKS
  let history = useHistory();


  // FUNCTIONS
    
  let goToRegister = () => {
    setTimeout(() =>{
        history.push('/register')
    },1000);
  };

  return (
    <div className="choiseComponent">
      <Header/>
      <div className="navbarComponent"></div>

      <div className="mainChoice">

        <div className="spaceBar"></div>

        <div className="sectionImgMaster">
          <h1 className="sitterChoice" onClick={goToRegister}>I'm a baby sitter!</h1>
          <img className="sitter" src={sitter} alt="sitter"/>
          <img className="owner" src={owner} alt="owner"/>
          <h1 className="ownerChoice">I'm a owner dog!</h1>
        </div>

        <div className="navbarComponent"></div>

        <div className="h1Choice">
          <h1>Cause we are lovers,</h1>
          <h1>We love dogs.</h1>
        </div>

        <div className="spaceBar"></div>

        
      </div>
      <Footer/>
    </div>
  )
}

export default Choice
