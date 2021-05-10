import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SitterTabs from '../../components/SitterTabs/SitterTabs';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
import sitterDog from '../../img/sitterDog.png';




function Sitter (props) {

  return (
    <div className="sitterComponent">
      <Header/>
      <Navbar/>
      <div className="space-bar"></div>
      <div className="space-bar"></div>
      <div className="space-bar"></div>
      <div className="sitter-img-container">

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2 className="sitter-h2">Hello Lover !</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2>You could be a candidate,</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2>And wait for the confirmation,</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2 className="sitter-h2">Give some love </h2>
        


        <img src={sitterDog} alt="sitterDog" />

      </div>
      <SitterTabs/>
      <div className="space-bar"></div>
      <div className="space-bar"></div>
      <div className="space-bar"></div>

      <Footer/>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user : state.userReducer.user,
    dog  : state.dogReducer.dog,
    request : state.requestReducer.list,
    candidate : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Sitter);
