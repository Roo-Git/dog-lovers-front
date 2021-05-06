import React from 'react'
import footPrint from '../../img/footPrint.png';
import {connect} from 'react-redux';

//import RequestForm from '../RequestForm/RequestForm';

function DogCard(props) {


  return (
    <div className="dogCardComponent">
      {
        props.dog.id
        ?
        <>
        <h2 className="dog-title">Your Dog!</h2>

        <div className="dog-card-container">
            <div className="dog-img-container">
              <img src={footPrint} alt="footPrint"/>
            </div>
            <div className="dog-card-info">

              <p className="dog-name-card">Name: {props.dog.name}</p>
              <p className="dog-gender-card">Gender: {props.dog.gender}</p>
              <p className="dog-breed-card">Breed: {props.dog.breed}</p>
              <p className="dog-size-card">Size: {props.dog.size}</p>
              <p className="dog-age-card">Age: {props.dog.age}</p>
              <p className="dog-description-card">Description: {props.dog.description}</p>

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
      dog  : state.dogReducer.dog
  }
}

export default connect(mapStateToProps)(DogCard);

