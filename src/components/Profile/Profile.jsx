import axios from 'axios';
import React, {useState} from 'react'
import validate from "../../tools/validate";
import {port, adopter} from "../../api/ApiSQL";
import InputForm from '../InputForm/InputForm';
import PersonalButton from '../PersonalButton/PersonalButton';
import {connect} from 'react-redux';

function Profile(props) {

  const [user, setUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    nif: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleState = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    if (Object.keys(errors).length > 0) 
    setErrors(validate({ ...user, [e.target.name]: e.target.value}, "register"));
  }

  // AUTHORIZATION
  let token = props.token
  let auth = {
      headers: {
          'Authorization': `Bearer ${token}`
      }};

  const updateUser = async (ev) => {
    ev.preventDefault()

    const errs = validate(user, "register")
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    };

    let body = {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      country: user.country,
      city: user.city,
      address: user.address,
      nif: user.nif,
      description: user.description

    }

    try {
      const id = props.user.id
      let result = await axios.put(`${port}${adopter}/${id}`,  body, auth)
      console.log(result, "Usuario Updated con exito")
    } catch (error){
      console.log(error, "El usuario no ha podido ser updateado")
    } 
 };
  return (
    <div className="profileComponent">
      <h2 className="profile-h2">You can update your account as a owner or baby sitter!</h2>
      <form className="update-user-form" onSubmit={updateUser}>
        <div className="username-update">
          <InputForm
            type="input"
            title="Username"
            name="username"
            onChange={handleState}
            error={errors.username?.help}
            value={user.username}
          />
        </div>
        <div className="email-update">
          <InputForm
            type="input"
            title="Email"
            name="email"
            onChange={handleState}
            error={errors.email?.help}
            value={user.email}
          />
        </div>
        <div className="first-name-update">
          <InputForm
            type="input"
            title="First Name"
            name="firstName"
            onChange={handleState}
            error={errors.firstName?.help}
            value={user.firstName}
          />
        </div>
        <div className="last-name-update">
          <InputForm
            type="input"
            title="Last Name"
            name="lastName"
            onChange={handleState}
            error={errors.lastName?.help}
            value={user.lastName}
          />
        </div>
        <div className="phone-update">
          <InputForm
            type="input"
            title="Phone"
            name="phone"
            onChange={handleState}
            error={errors.phone?.help}
            value={user.phone}
          />
        </div>
        <div className="country-update">
          <InputForm
            type="input"
            title="Country"
            name="country"
            onChange={handleState}
            error={errors.country?.help}
            value={user.country}
          />
        </div>
        <div className="city-update">
          <InputForm
            type="input"
            title="City"
            name="city"
            onChange={handleState}
            error={errors.city?.help}
            value={user.city}
          />
        </div>
        <div className="address-update">
          <InputForm
            type="input"
            title="Address"
            name="address"
            onChange={handleState}
            error={errors.address?.help}
            value={user.address}
          />
        </div>
        <div className="nif-update">
          <InputForm
            type="input"
            title="N.I.F."
            name="nif"
            onChange={handleState}
            error={errors.nif?.help}
            value={user.nif}
          />
        </div>
        <div className="description-update">
          <InputForm
            type="input"
            title="Description"
            name="description"
            onChange={handleState}
            error={errors.description?.help}
            value={user.description}
          />
        </div>
        <div className="ownwer-up"> 
            <PersonalButton name="Owner Update"/> 
        </div>
        <div className="sitter-up"> 
            <PersonalButton name="Baby Sitter Update"/> 
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      token: state.userReducer.token
      
  }
}

export default connect(mapStateToProps)(Profile);

