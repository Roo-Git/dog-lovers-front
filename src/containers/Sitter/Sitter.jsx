import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import {connect} from 'react-redux';
import { ADD } from '../../redux/types/candidateType';
import { ADD_LIST } from '../../redux/types/requestType';
import { useLocation } from 'react-router';
import { candidates, careRequest, port } from '../../api/ApiSQL';
import axios from 'axios';



function Sitter (props) {


  // HOOKS
 

  // HOOK USESTATE 'REQUEST'
  const [careRequests, setCareRequests] = useState({
    careRequestList: [],
  });

  // HOOK USEEFFECT 'REQUEST'
  useEffect(()=>{
    getAllRequest();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps


  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const confirmedBySitter = Boolean(params.get('confirmedBySitter=true'));
  const acceptedByOwner = Boolean(params.get('acceptedByOwner'));

    // HOOK USESTATE 'CANDIDATE'
  const [candidate, setCandidate] = useState({
    post: '',
    confirmedBySitter: confirmedBySitter,
    acceptedByOwner: acceptedByOwner,
    careRequest_Id: '',
    sitter_Id: ''
  });

  // HANDLERS

  // HANDLER FOR CANDIDATE
  const handleState = (e) => {
    setCandidate({...candidate, [e.target.name]: e.target.value});
  };


  // FUNCTIONS

  // CREATE A CANDIDATE
  
  const createCandidate = async () => {
    

    let bodyCandidate = {
      post: candidate.post,
      confirmedBySitter: candidate.confirmedBySitter,
      acceptedByOwner: candidate.acceptedByOwner,
      careRequest_Id: props.request.id,                         
      sitter_Id: props.user.id                                  
    };

    console.log(bodyCandidate, 'Soy el Body de Candidate')

    try{
      let result = await axios.post(`${port}${candidates}`, bodyCandidate)
      console.log(result, 'Candidato creado con exito')
      if(result){
        props.dispatch({type: ADD, payload: result.data})
      }
    } catch (error) {
      console.log(error, 'La candidatura no ha podido ser realizada')
    }
  }

  // GET ALL CARE REQUEST
  
  const getAllRequest = async () => {
    

    try{
      let result = await axios.get(`${port}${careRequest}`)
      //console.log(result.data, "Requests obtenidas con exito")
      setCareRequests({...careRequests, careRequestList: result.data})
      if(result){
        props.dispatch({type: ADD_LIST, payload: result.data})
      }

    } catch(error) {
      console.log(error, 'Las request no han podido ser obtenidas')
    }
 };


  return (
    <div className="sitterComponent">
      <Header/>
      <Navbar/>

      {

      careRequests.careRequestList.map(request =>{
        return(        
        <div key={request.id}>
          <p>POST: {request.post}</p>
          <p>ID DE LA CARE REQUEST: {request.id}</p>
          <button onChange={handleState} onClick={()=>createCandidate()} value={request.id}>Crear Candidato</button>
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
    request : state.requestReducer.list,
    candidate : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Sitter);
