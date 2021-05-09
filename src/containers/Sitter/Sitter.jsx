import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SitterTabs from '../../components/SitterTabs/SitterTabs';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';




function Sitter (props) {

  return (
    <div className="sitterComponent">
      <Header/>
      <Navbar/>
      <SitterTabs/>
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
    request : state.requestReducer.list,
    candidate : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Sitter);
