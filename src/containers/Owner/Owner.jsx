import React from 'react'
import {connect} from 'react-redux';
import DogForm from '../../components/DogForm/DogForm';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";




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
        <div className="target">Hola! {props.dog.name}, {props.dog.gender}</div>
        
        
        
        </>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      dog  : state.dogReducer.dog
  }
}

export default connect(mapStateToProps)(Owner);
