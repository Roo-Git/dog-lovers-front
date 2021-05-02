import axios from 'axios';
import React, {useState}from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import {connect} from 'react-redux';
import { careRequest, port } from '../../api/ApiSQL';


function Sitter(props) {
  const [request, setRequest] = useState()

  const handleState = (ev) => {
    setRequest ({...request, [ev.target.name]: ev.target.value})
  };
  const toggle = async (ev) => {
    ev.preventDefault()

    try{
      let result = await axios.get(`${port}${careRequest}`)
      console.log(result, "Requests obtenidas con exito")
      if(result){
      }
    } catch(error) {
      console.log(error, 'Las request no han podido ser obtenidas')
    }
 };
  return (
    <div className="sitterComponent">
      <Header/>
      <Navbar/> 
      <p>Vista Sitter</p>
      <button onChange={handleState} onClick={toggle}></button>
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

export default connect(mapStateToProps)(Sitter);
