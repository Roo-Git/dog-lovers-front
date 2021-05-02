import React from 'react'
import footPrint from '../../img/footPrint.png';
import {connect} from 'react-redux';
import PersonalButton from '../PersonalButton/PersonalButton';
//import RequestForm from '../RequestForm/RequestForm';

function Card(props) {

  if(props.dog?.id)

  return (
    <div className="cardComponent">
      <div className="cardContainer">

      
        <div className="iconContainer">
          <img src={footPrint} alt="footPrint"/>
          <p>Name: {props.dog.name}</p>
          <p>Gender: {props.dog.gender}</p>
          <p>Breed: {props.dog.breed}</p>
          <p>Size: {props.dog.size}</p>
          <p>Age: {props.dog.age}</p>
          <p>Description: {props.dog.description}</p>
        </div>
        <div className="submit">
            <PersonalButton name="Request"/>
        </div>
        <div className="closeForm"></div>

      </div>
        <div className="navbarComponent"></div>
        
    </div>

  )
}

const mapStateToProps = state => {
  return {
      dog  : state.dogReducer.dog
  }
}

export default connect(mapStateToProps)(Card);
