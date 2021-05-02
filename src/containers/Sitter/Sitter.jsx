import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import {connect} from 'react-redux';
import { careRequest, port } from '../../api/ApiSQL';


function Sitter (props) {

  
  const [requests, setRequests] = useState({
    index: []
  });


  
  const getAllRequest = async () => {
    

    try{
      let result = await axios.get(`${port}${careRequest}`)
      console.log(result.data, "Requests obtenidas con exito")
      setRequests({...requests, index: result.data})
    } catch(error) {
      console.log(error, 'Las request no han podido ser obtenidas')
    }
 };

  useEffect(()=>{
    getAllRequest();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <div className="sitterComponent">
      <Header/>
      <Navbar/>
      {

      requests.index.map(request =>{
        return(        
        <div key={request.id}>
          <p>POST: {request.post}</p>
        </div>)

      })
      
      }
      
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
