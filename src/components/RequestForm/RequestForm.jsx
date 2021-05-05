import React, {useState} from 'react'
import axios from 'axios';
import { careRequest, port } from '../../api/ApiSQL';
import {connect} from 'react-redux';
import {ADD_LIST} from '../../redux/types/requestType';
import InputForm from '../../components/InputForm/InputForm';
import PersonalButton from '../../components/PersonalButton/PersonalButton';

function RequestForm(props) {
  const [request, setRequest] = useState ({
    owner_Id: '',
    dog_Id: '',
    startDate: '',
    finishDate: '',
    post: '',

  });

  const handleState = (ev) => {
    setRequest ({...request, [ev.target.name]: ev.target.value})
  };

  const toggle = async (ev) => {
    ev.preventDefault()

    let body = {
      owner_Id: props.user.id,
      dog_Id: props.dog.id,
      startDate: request.startDate,
      finishDate: request.finishDate,
      post: request.post
    }
    console.log(body, "==== BODY REQUEST")

    try{
      let result = await axios.post(`${port}${careRequest}`, body)
      console.log(result, "Request creada con exito")
      if(result){
        props.dispatch({type: ADD_LIST, payload: result.data})
      }
    } catch(error) {
      console.log(error, 'La request no ha podido ser creada')
    }
 };

  

  return (
    <div className="requestComponent">
      {
        props.dog.id
        ?
        <>
        <h2 className="care-request-h2">Please, create a care request!</h2>
        <form className="care-request-form" onSubmit={toggle}>
            <div className="start-date-input">
              <InputForm
                type="input"
                title="StartDate"
                name="startDate"
                onChange={handleState}
                value={request.startDate}
              />
            </div>
            <div className="finish-date-input">
              <InputForm 
                type="input"
                title="FinishDate"
                name="finishDate"
                onChange={handleState}
                value={request.finishDate}
              />
            </div>
            <div className="post-input-care-request">
              <InputForm 
                type="input"
                title="Post"
                name="post"
                onChange={handleState}
                value={request.post}
              />
            </div>
           
            <div className="care-request-submit">
              <PersonalButton name="Submit"/> 
            </div>  
        </form>
        </>
        :
        <>
        <h2>Not care request yet</h2>
        </>
      }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user : state.userReducer.user,
    dog  : state.dogReducer.dog,
    request : state.requestReducer.list
  }
}

export default connect(mapStateToProps)(RequestForm);
