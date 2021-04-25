import React from 'react'

function InputForm(props) {
  return (
    <div className="inputComponent">
      <input 
        className="inputText"
        type={props.type}
        name={props.name}
        maxLength={props.lenght}
        onChange={props.onChange}
        value={props.value}
        required
      ></input>
      <span className="floatingLabel" >{props.title}</span>  
    </div>
  )
}

export default InputForm
