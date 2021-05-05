import React from 'react'
import {connect} from 'react-redux';
import DogForm from '../../components/DogForm/DogForm';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import DogCard from '../../components/DogCard/DogCard';
import RequestForm from '../../components/RequestForm/RequestForm';
import Footer from '../../components/Footer/Footer';
import OwnerTabs from '../../components/OwnerTabs/OwnerTabs';



function Owner(props) {


  
  return (
    <div className="ownerContainer">
      <Header/>
      <Navbar/>
      <OwnerTabs/>
      <div className="spaceBar"></div>
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
        !props.dog.user_Id
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