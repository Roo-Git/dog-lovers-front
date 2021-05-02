import React, {useState} from 'react'
import axios from 'axios';
import { careRequest, port } from '../../api/ApiSQL';
import {connect} from 'react-redux';
import {SHOW} from '../../redux/types/requestType';
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
      let id = props.user.id
      let result = await axios.post(`${port}${careRequest}/${id}`)
      console.log(result, "Request creada con exito")
      if(result){
        props.dispatch({type: SHOW, payload: result.data})
      }
    } catch(error) {
      console.log(error, 'La request no ha podido ser creada')
    }
 };

  

  


  return (
    <div className="requestComponent">
      <form className="registerForm" onSubmit={toggle}>
            <h2>Request</h2>
            <div className="input">
              <InputForm
                type="input"
                title="Start Date"
                name="startDate"
                onChange={handleState}
                value={request.startDate}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Finish Date"
                name="finishDate"
                onChange={handleState}
                value={request.finishDate}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Post"
                name="post"
                onChange={handleState}
                value={request.post}
              />
            </div>
           
            <div className="submit">
              <PersonalButton name="Submit"/> 
            </div>
            <div className="closeForm"></div>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user : state.userReducer.user,
    dog  : state.dogReducer.dog,
    request : state.requestReducer.request
  }
}

export default connect(mapStateToProps)(RequestForm);
