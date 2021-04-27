import React from 'react';
import dogHeader from '../../img/dogHeader.png';
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
      <img className="dogHeader" src={dogHeader} alt="dogHeader" onClick={goToBeginning}/>
      <div className="title">Dog Lovers</div>
    </div>
  )
}

export default Header
