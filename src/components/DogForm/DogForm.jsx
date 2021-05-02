import React, { useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {SHOW} from '../../redux/types/dogType'
import InputForm from "../../components/InputForm/InputForm";
import PersonalButton from "../../components/PersonalButton/PersonalButton";
import {port, pet} from "../../api/ApiSQL";


function DogForm(props) {

  const [dog, setDog] = useState ({
    user_Id: '',
    name : '',
    gender: '',
    breed: '',
    size: '',
    age: '',
    description: '',
    
  });

  const handleState = (ev) => {
    setDog ({...dog, [ev.target.name]: ev.target.value})
  }

  const toggle = async (ev) => {

    ev.preventDefault()

    let body = {
      user_Id: props.user.id,
      name: dog.name,
      gender: dog.gender,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      description: dog.description
    };

    console.log(body, "======BODY")

    try {
      
      let result = await axios.post(`${port}${pet}`, body)
      console.log(result, 'Perro creado con exito')
      if(result){
        props.dispatch({type: SHOW, payload: result.data})
      }

    }catch (error){
      console.log(error, 'El perr@ no ha podido ser creado')

    }
  };

  return (
    <div className="dogFormComponent">
      <form className="registerForm" onSubmit={toggle}>
            <h2>Dog Registration</h2>
            <div className="input">
              <InputForm 
                type="input"
                title="Name"
                name="name"
                onChange={handleState}
                value={dog.name}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Gender"
                name="gender"
                onChange={handleState}
                value={dog.gender}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Breed"
                name="breed"
                onChange={handleState}
                value={dog.breed}
              />
            </div>
            <div className="input">
              <InputForm 
                type="tinput"
                title="Size"
                name="size"
                onChange={handleState}
                value={dog.size}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Age"
                name="age"
                onChange={handleState}
                value={dog.age}
              />
            </div>
            <div className="input">
              <InputForm 
                type="input"
                title="Description"
                name="description"
                onChange={handleState}
                value={dog.description}
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
      dog  : state.dogReducer.dog
  }
}

export default connect(mapStateToProps)(DogForm);
