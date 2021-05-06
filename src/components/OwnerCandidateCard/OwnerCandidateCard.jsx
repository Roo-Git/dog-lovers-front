import React from 'react'
import {connect} from 'react-redux';

function OwnerCandidateCard(props) {
  return (
    <div className="ownerCandidateCard">
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
    </div>
  )
}

const mapStateToProps = state => {
  return {
      candidate  : state.candidateReducer.candidate
  }
}

export default connect(mapStateToProps)(OwnerCandidateCard);
