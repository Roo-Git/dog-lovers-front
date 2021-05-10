import React from 'react'
import {connect} from 'react-redux';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import OwnerTabs from '../../components/OwnerTabs/OwnerTabs';
import ownerDog from '../../img/ownerDog.png';



function Owner(props) {


  
  return (
    
    <div className="ownerComponent">
      <Header/>
      <Navbar/>
      <div className="space-bar"></div>
      <div className="space-bar"></div>
      <div className="space-bar"></div>
      <div className="owner-img-container">

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2 className="owner-h2">Hello Lover !</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2>You can try to subscribe your dog,</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2>Ask for a care request,</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2>And wait for a candidate.</h2>

        <h3>Invisible</h3>
        <h3>Invisible</h3>

        <h2 className="owner-h2">Love is coming </h2>
        
        <h3>Invisible</h3>
        <h3>Invisible</h3>


        <img src={ownerDog} alt="ownerDog" />
        
      </div>
      <OwnerTabs/>
      <div className="space-bar"></div>
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
    request : state.requestReducer.request
  }
}

export default connect(mapStateToProps)(Owner);
