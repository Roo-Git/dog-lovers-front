import React from 'react'
import {connect} from 'react-redux';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import OwnerTabs from '../../components/OwnerTabs/OwnerTabs';



function Owner(props) {


  
  return (
    <div className="ownerContainer">
      <Header/>
      <Navbar/>
      <OwnerTabs/>
      <div className="spaceBar"></div>
      <div className="spaceBar"></div>
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


/*
 {
        !props.dog[0].user_Id
        ?
        <>
        <Header/>
        <Navbar/>
        <DogForm/>
        <OwnerTabs/>
        
        
        
        </>
        :
        <>
        <Header/>
        <Navbar/>
        <Card/>
        <RequestForm/>
        <Footer/>
        
        </>
      }

*/