import React from 'react';
import dogHeader from '../../img/dogHeader.png'
import { useHistory } from 'react-router';

function Header(props) {

  // HOOKS
  let history = useHistory();


  // FUNCTIONS
      
  let goToBeginning = () => {
    setTimeout(() =>{
        history.push('/')
    },1000);
  };
  
  return (
    <div className="headerComponent">
      <div className="space-header"></div>
      <img className="dog-header" src={dogHeader} alt="dog-header" onClick={goToBeginning}/>
      <h1 className="title">Dog Lovers</h1>
    </div>
  )
}

export default Header
