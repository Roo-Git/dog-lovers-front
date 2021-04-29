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

      <div className="mainChoice">

        <div className="spaceBar"></div>

        <div className="sectionImgMaster">
          
          <Link className="sitterChoice" to="/register?sitter=true">I'm a baby sitter!</Link>        
          <img className="sitter" src={sitter} alt="sitter"/>
          <img className="owner" src={owner} alt="owner"/>
          <Link className="ownerChoice" to="/register">I'm a dog owner!</Link>
          
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
