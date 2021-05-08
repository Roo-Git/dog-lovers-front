import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { candidates, port, confirmations } from '../../api/ApiSQL';
import { ADD } from '../../redux/types/candidateType';
import { CONVALIDATE } from '../../redux/types/confirmationType';



function OwnerCandidateCard(props) {


      const [candidate, setCandidate] = useState({
        myCandidate: []
      });

      useEffect(() => {
        getCandidate(); // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, []);

      const getCandidate = async () => {

        try{
          // props.user.CareRequests.map( request => {return request.id}) 
          let id = props.user.CareRequests[0]?.id
          let result = await axios.get(`${port}${candidates}/${id}`);
          setCandidate({...candidate, myCandidate: result.data});
          if(result.data){
            props.dispatch({type: ADD, payload: [result.data]})
          }

        } catch (error) {
          
        };
        
      };

      //-----------------------------------------------------------------------------------//

      
      // Confirm Candidate by Owner

      const [confirmCandidate, setConfirmCandidate] = useState ({
        confirmationByOwner : true,
        dog_Id : '',
        candidate_Id : 1,
        user_Id : ''
      });

      const handleState = (ev) => {
        setConfirmCandidate({...confirmCandidate, [ev.target.name]: ev.target.value})
      };
      const ConfirmCandidate = async (ev) => {

        ev.preventDefault()

        let body = {
          confirmationByOwner: true,
          dog_Id : props.user.id,
          candidate_Id : props.user.id,
          user_Id: props.user.id,
        };
    
        console.log(body, "BODY CONFIRMACIÓN")
    
        try {
          
          let result = await axios.post(`${port}${confirmations}`, body)
          console.log(result, 'Confirmación creada con exito')
          if(result){
            props.dispatch({type: CONVALIDATE, payload: [result.data]})
          }
    
        }catch (error){
          console.log(error, 'La confirmacióN no ha podido ser creada')
    
        }
      };
      

  return (
    <div className="ownerCandidateCard">
        {
            props.candidate?.length > 0
            ?
            <>
            <h2 className="candidate-title">Your Candidate!</h2>

            <div className="candidate-card-container">
              
              <div className="candidate-card-info">
                <p>DOG: {props.dog[0]?.name}</p>
                <p>ID SITTER: {props.candidate[0]?.sitter_Id}</p>
                <p className="candidate-post">Candidate Message: {props.candidate[0]?.post}</p>
                <button onChange={handleState} className="accept-candidate" onClick={ConfirmCandidate}>Accept</button>
              </div>
            </div>
            </>
            :
            <>
            <h2 className="not-candidate">Still don't have candidate.</h2>
            </>
        }

    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      dog : state.dogReducer.dog,
      request : state.requestReducer.list,
      candidate  : state.candidateReducer.candidate,
      confirmation : state.confirmationReducer.confirmation
  }
}

export default connect(mapStateToProps)(OwnerCandidateCard);




/*



------------------------------------------------------------------------------------------
  const [candidate, setCandidate] = useState({
    myCandidate: [],
  });



  // Function GET CANDIDATE BY ID (Necesito el ID de la care request)

  // Ahora mismo estoy hardcodeando la ID del candidato.

  const getCandidate = async (props) => {

    try{
      
      let id = props.user.CareRequests[0]?.id   // ESTO DEBERIA DE FUNCIONAR.
      console.log(props, "SOY EL ID")
      let result = await axios.get(`${port}${candidates}/${id}`)
      setCandidate({...candidate, myCandidate: [result.data]})
      if(result){
        console.log(result, "Candidato obtenido con exito.")
      }
    } catch(error) {
      console.log(error, "No se ha podido obtener el candidato con exito")
    }
  }

  useEffect(()=>{
    getCandidate();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps






------------------------------------------------------------------------------



*/