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


  
  return (
    <div className="candidaciesComponent">
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      confirmation : state.confirmationReducer.confirmation
  }
}

export default connect(mapStateToProps)(Candidacies);
