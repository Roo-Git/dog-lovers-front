import React from 'react';
import dogHeader from '../../img/dogHeader.png';

function Header(props) {
  return (
    <div className="headerComponent">
      <img className="logo" src={dogHeader} alt="dogHeader"/>
      <div className="title">Dog Watcher's</div>
    </div>
  )
}

export default Header
