import React, {useState, useEffect} from 'react'
import InputForm from '../InputForm/InputForm';
import PersonalButton from '../PersonalButton/PersonalButton';
import axios from 'axios';
import { candidates, careRequest, port } from '../../api/ApiSQL';
import {connect} from 'react-redux';
import { ADD } from '../../redux/types/candidateType';
import { ADD_LIST } from '../../redux/types/requestType';

function CareRequestSitter(props) {

  // HOOK to useState All Requests

  const [careRequests, setCareRequests] = useState({
    careRequestList: [],
  });

  // Function to Get All Requests

  const getAllRequest = async () => {
    
    try{
      let result = await axios.get(`${port}${careRequest}`)
      console.log(result.data, "Requests obtenidas con exito")
      setCareRequests({...careRequests, careRequestList: result.data})
      if(result){
        props.dispatch({type: ADD_LIST, payload: [result.data]})
      }

    } catch(error) {
      console.log(error, 'Las request no han podido ser obtenidas')
    }
 };

  // HOOK to useEffect all Requests

  useEffect(()=>{
    getAllRequest();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps



  //---------------------------------------------------------------------//




  // HOOK to useState a Candidate

  const [candidate, setCandidate] = useState({
    post: '',
    confirmedBySitter: true,
    acceptedByOwner: false,
    careRequest_Id: '',
    sitter_Id: ''
  });

  // HANDLER FOR CANDIDATE
  const handleState = (e) => {
    setCandidate({...candidate, [e.target.name]: e.target.value});
  };

  // Function to Create a Candidate

  const createCandidate = async (id) => {
    

    let bodyCandidate = {
      post: candidate.post,
      confirmedBySitter: candidate.confirmedBySitter,
      acceptedByOwner: candidate.acceptedByOwner,
      careRequest_Id: id,                         
      sitter_Id: props.user.id                                  
    };

    console.log(bodyCandidate, 'Soy el Body del candidato')

    try{
      let result = await axios.post(`${port}${candidates}`, bodyCandidate)
      console.log(result, 'Candidato creado con exito')
      if(result){
        props.dispatch({type: ADD, payload: [result.data]})
      }
    } catch (error) {
      console.log(error, 'La candidatura no ha podido ser realizada')
    }
  }


  return (
    <div className="careRequestSitterComponent">

      {

      
        careRequests.careRequestList.map(request =>{
          return(        
          <div key={request.id}>
            <h2 className="cr-sitter-title">All Care Request!</h2>

            <div className="cr-card-sitter-container">

                <div className="cr-card-sitter-info">
                    <p className="cr-post-sitter">POST: {request.post}</p>
                    <p className="cr-start-date-sitter">Start Date: {request.startDate}</p>
                    <p className="cr-finish-date-sitter">Finish Date: {request.finishDate}</p>
                    <form className="post-candidate-input" >
                      <InputForm 
                        type="input"
                        title="Candidate post"
                        name="post"
                        onChange={handleState}
                        value={candidate.post}
                      />
                    </form>
                      <div className ="candidate-submit" onClick={()=>createCandidate(request.id)} value={request.id}>
                       <PersonalButton name="Send"/> 
                      </div> 
                </div>
            </div>

          </div>
            
          )
        })
  
      }
    </div>
    //<h2 className="not-care-request">Not care requests yet!</h2>
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

export default connect(mapStateToProps)(CareRequestSitter);
