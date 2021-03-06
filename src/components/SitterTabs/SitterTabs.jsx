import React, { useState } from 'react'
import CareRequestSitter from '../CareRequestSitter/CareRequestSitter';
import Candidacies from '../Candidacies/Candidacies';
import Profile from '../Profile/Profile';

function SitterTabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerSitter">
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Care Requests
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Your Candidacies
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        Your Profile
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <CareRequestSitter/>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <Candidacies/>
      </div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <Profile/>
      </div>
    </div>
  </div>
);
}

export default SitterTabs