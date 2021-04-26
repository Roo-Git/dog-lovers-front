import React from 'react'

function Button(props) {
  return (
    <button className="buttonComponent" onClick={props.onClick}>
      {props.name} 
      {props.submit} 
      {props.type}
    </button>
  )
}

export default Button
