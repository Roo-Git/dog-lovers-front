import React from 'react'
import {connect} from 'react-redux';
import DogForm from '../../components/DogForm/DogForm';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from '../../components/Card/Card';
import RequestForm from '../../components/RequestForm/RequestForm';
import Footer from '../../components/Footer/Footer';



function Owner(props) {


  
  return (
    <div className="ownerContainer">
      {
        !props.dog.user_Id
        ?
        <>
        <Header/>
        <Navbar/>
        <DogForm/>
        
        
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
    </div>
  )
}

const mapStateToProps = state => {
  return {
      dog  : state.dogReducer.dog
  }
}

export default connect(mapStateToProps)(Owner);
