import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PersonalButton from "../../components/PersonalButton/PersonalButton";
import InputForm from '../../components/InputForm/InputForm';
import {connect} from 'react-redux';
import { ADD } from '../../redux/types/candidateType';
import { GET } from '../../redux/types/requestType';
import { useLocation } from 'react-router';
import { candidates, careRequest, port } from '../../api/ApiSQL';
import axios from 'axios';



function Sitter (props) {


  // HOOKS
 

  // HOOK USESTATE 'REQUEST'
  const [requests, setRequests] = useState({
    index: []
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

  // CREATE A CANDIDATE (NOT WORKING)
  console.log(props, "PROOOOOOOOOOOOOOOPS")
  const toggle = async (ev) => {
    ev.preventDefault()

    let bodyCandidate = {
      post: candidate.post,
      confirmedBySitter: candidate.confirmedBySitter,
      acceptedByOwner: candidate.acceptedByOwner,
      careRequest_Id: props.request,                            
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
      <form className="registerFormm" onSubmit={toggle}>
      <InputForm 
                type="input"
                title="Post"
                name="post"
                onChange={handleState}
                value={candidate.post}
      />
      <PersonalButton name="Submit"/>
      </form>

      {

      requests?.index.map(request =>{
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
    request : state.requestReducer.getAllRequest,
    candidate : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(Sitter);
