import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { candidates, port } from '../../api/ApiSQL';

function OwnerCandidateCard(props) {

  const [candidate, setCandidate] = useState({
    myCandidate: [{}],
  });

  useEffect(()=>{
    getCandidate();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  // Function GET CANDIDATE BY ID (Necesito el ID de la care request)

  // Ahora mismo estoy hardcodeando la ID del candidato.

  const getCandidate = async (props) => {

    try{
      let id = 1
      let result = await axios.get(`${port}${candidates}/${id}`)
      setCandidate({...candidate, myCandidate: result.data})
      if(result){
        console.log(result, "Candidato obtenido con exito.")
      }
    } catch(error) {
      console.log(error, "No se ha podido obtener el candidato con exito")
    }
  }

  return (
    <div className="ownerCandidateCard">

    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      candidate  : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(OwnerCandidateCard);




/*
      {
        props.candidate.length > 0
        ?
        <>
        <h2 className="candidate-title">Your Candidate!</h2>

        <div className="candidate-card-container">
          
          <div className="candidate-card-info">
            <p className="candidate-post">Candidate Message: {props.candidate[0].post}</p>
            <button className="accept-candidate">Accept</button>
            <p className="candidate-id">{props.candidate[0].id}</p>
            <p className="confirmed-by-sitter">Confirmed by Sitter: {props.candidate[0].confirmedBySitter}</p>
            <p className="accepted-by-owner">Accepted by Owner: {props.candidate[0].acceptedByOwner}</p>
          </div>
        </div>
        </>
        :
        <>
        <h2 className="not-candidate">Still don't have candidate.</h2>
        </>
      }



*/