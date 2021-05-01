import React from 'react'
import {connect} from 'react-redux';
import DogForm from '../../components/DogForm/DogForm';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";




function Owner(props) {


  
  return (
    <div className="ownerContainer">
      {
        !props.user.id
        ?
        <>
        <Header/>
        <Navbar/>
        
        
        </>
        :
        <>
        <Header/>
        <Navbar/>
        <DogForm/>
        Hola! {props.dog.name}, {props.dog.gender}
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
