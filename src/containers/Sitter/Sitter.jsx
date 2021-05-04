import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import {connect} from 'react-redux';
import { candidates, careRequest, port } from '../../api/ApiSQL';
import { useLocation } from 'react-router';
import InputForm from '../../components/InputForm/InputForm';
import { ADD } from '../../redux/types/candidateType';
import PersonalButton from "../../components/PersonalButton/PersonalButton";
import {GET} from '../../redux/types/requestType';


function Sitter (props) {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const confirmedBySitter = Boolean(params.get('confirmedBySitter'));
  const acceptedByOwner = Boolean(params.get('acceptedByOwner'));

  // HOOKS

  // HOOK USESTATE 'CANDIDATE'
  const [candidate, setCandidate] = useState({
    post: '',
    confirmedBySitter: confirmedBySitter,
    acceptedByOwner: acceptedByOwner,
    careRequest_Id: '',
    sitter_Id: ''
  })

  // HOOK USESTATE 'REQUEST'
  const [requests, setRequests] = useState({
    index: []
  });

  // HOOK USEEFFECT 'REQUEST'
  useEffect(()=>{
    getAllRequest();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  // HANDLERS

  // HANDLER FOR CANDIDATE
  const handleState = (e) => {
    setCandidate({...candidate, [e.target.name]: e.target.value});
  };


  // FUNCTIONS

  // CREATE A CANDIDATE (NOT WORKING)

  const toggle = async (ev) => {
    ev.preventDefault()

    let bodyCandidate = {
      post: candidate.post,
      confirmedBySitter: candidate.confirmedBySitter,
      acceptedByOwner: candidate.acceptedByOwner,
      careRequest_Id: props.careRequest_Id,
      sitter_Id: props.sitter_Id
    }
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
      console.log(result.data, "Requests obtenidas con exito")
      setRequests({...requests, index: result.data})
      if(result){
        props.dispatch({type: GET, payload: result.data})
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

      requests.index.map(request =>{
        return(        
        <div key={request.id}>
          <p>POST: {request.post}</p>
          <form className="registerForm" onSubmit={toggle}>
      <InputForm 
                type="text"
                title="Post"
                name="post"
                onChange={handleState}
                value={candidate.post}
      />
      <PersonalButton name="Submit"/>
      </form>
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
    request : state.requestReducer.request,
    candidate : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Sitter);
