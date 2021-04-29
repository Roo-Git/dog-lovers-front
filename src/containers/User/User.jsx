import React from 'react'
import {connect} from 'react-redux';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ImageUploader from '../../components/ImageUploader/ImageUploader';

function User(props) {
  return (
    <div className="userContainer">
      <Header/>
      <Navbar/>
      <p>Vista User</p>
      <div className="masterImage">
        <ImageUploader/>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(User);
