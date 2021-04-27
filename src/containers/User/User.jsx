import React from 'react'
import {connect} from 'react-redux';

function User(props) {
  return (
    <div className="userContainer">
      <p>Vista User</p>
      <div>Hola! {props.user?.username}!</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
  }
}

export default connect(mapStateToProps)(User);
