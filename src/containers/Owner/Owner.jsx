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
        </>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(Owner);
