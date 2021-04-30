import React from 'react'
import {connect} from 'react-redux';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";


function User(props) {
  return (
    <div className="userContainer">
      <Header/>
      <Navbar/>
      
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(User);
