import React from 'react'
import Header from '../../components/Header/Header'
import sitter from '../../img/sitter.png'
import owner from '../../img/owner.png'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'


function Choice(props) {

  // HOOKS
  


  // FUNCTIONS
    

  return (
    <div className="choiseComponent">
      <Header/>
      <div className="navbarComponent"></div>

      <div className="main-choice">

        <div className="space-bar"></div>
        <div className="space-bar"></div>

        <div className="choice-master-section">
          
          <Link className="choice-sitter" to="/register?sitter=true">I'm a baby sitter!</Link>        
          <img className="sitter" src={sitter} alt="sitter"/>
          <img className="owner" src={owner} alt="owner"/>
          <Link className="choice-owner" to="/register">I'm a dog owner!</Link>
          
        </div>

        <div className="navbarComponent"></div>
        <div className="space-bar"></div>

        <div className="choice-second-section">
          <h2>Cause we are lovers,</h2>
          <br />
          <h2>We love dogs.</h2>
        </div>

        <div className="space-bar"></div>
        <div className="space-bar"></div>

        
      </div>
      <Footer/>
    </div>
  )
}

export default Choice
