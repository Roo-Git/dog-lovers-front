import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {port, confirmations } from '../../api/ApiSQL';
import {connect} from 'react-redux';

function Candidacies(props) {

  // Get Confirmation DATA by candidate_Id

  const [confirmation, setConfirmation] = useState({
    myConfirmation: []
  });

  useEffect(() => {
    getConfirmation(); // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const getConfirmation = async () => {

    try{
      let id = props.confirmation[0].candidate_Id
      let result = await axios.get(`${port}${confirmations}/${id}`);
      console.log(result, "GET CONFIRMATION OK")
      setConfirmation({...confirmation, myCandidate: result.data});

    } catch (error) {
      
    };
    
  };
      let condition = props.confirmation[0]?.confirmationByOwner    
  
  return (
    <div className="candidaciesComponent">
        {
          props.candidate[0]?.id 
          ?
          <>
          <h2 className="candidacie-title">Your Candidacie</h2>
          <p className="candidate-post">YOUR MESSAGE: {props.candidate[0]?.post} </p>
          <div className="owner-confirmation">{props.confirmation[0]?.confirmationByOwner}</div>
          <div>
            { condition ? <p>STATUS: confirmada</p> : <p>STATUS: sin confirmar</p>}
          </div>
          </>
          :
          <>
          <h2 className="not-candidacie">Not candidacies yet</h2>
          </>
        }
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      candidate: state.candidateReducer.candidate,
      confirmation : state.confirmationReducer.confirmation
  }
}

export default connect(mapStateToProps)(Candidacies);
