import React from 'react'
import {connect} from 'react-redux';

function OwnerCandidateCard(props) {
  return (
    <div className="ownerCandidateCard">
      {
        props.candidate.id
        ?
        <>
        <h2 className="candidate-title">Your Candidate!</h2>

        <div className="candidate-card-container">
          
          <div className="candidate-card-info">
            <p className="candidate-post">Candidate Message: {props.candidate.post}</p>
            <button className="accept-candidate">Accept</button>
            <p className="candidate-id">{props.candidate.id}</p>
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
      candidate  : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(OwnerCandidateCard);
