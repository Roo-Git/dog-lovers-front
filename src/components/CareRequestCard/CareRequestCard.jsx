import React from 'react'
import {connect} from 'react-redux';

function CareRequestCard(props) {
  return (
    <div className="careRequestCardComponent">
       {
        props.request.id
        ?
        <>
        <h2 className="cr-title">Your Care Request!</h2>

        <div className="cr-card-container">

            <div className="cr-card-info">
              
              <p className="cr-start-date-card">Start Date: {props.request.startDate}</p>
              <p className="cr-finish-date-card">Finish Date: {props.request.finishDate}</p>
              <p className="cr-post-card">Your message: {props.request.post}</p>

            </div>
        </div>
        
        </>
        :
        <>
        <h2 className="dog-not-subscribed">Subscribe your Dog!</h2>
        </>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
      request  : state.requestReducer.list
  }
}

export default connect(mapStateToProps)(CareRequestCard);
