import React from 'react';
import dogHeader from '../../img/dogHeader.png';

function Header(props) {
  return (
    <div className="headerComponent">
      <img className="dogHeader" src={dogHeader} alt="dogHeader"/>
      <div className="title">Dog Lovers</div>
    </div>
  )
}

export default Header
