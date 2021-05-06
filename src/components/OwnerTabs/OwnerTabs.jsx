import React, { useState } from 'react'
import DogCard from '../DogCard/DogCard';
import DogForm from '../DogForm/DogForm';
import CareRequestCard from '../CareRequestCard/CareRequestCard';
import RequestForm from '../RequestForm/RequestForm';
import OwnerCandidateCard from '../OwnerCandidateCard/OwnerCandidateCard';

function OwnerTabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerOwner">
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Sign up Your Dog
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Your Dog
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        Create Care Request
      </button>
      <button
        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(4)}
      >
        Your Care Request
      </button>
      <button
        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(5)}
      >
        Your Candidate
      </button>
      <button
        className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(6)}
      >
        Your Profile
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <DogForm/>
    
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <DogCard/>

      </div>

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <RequestForm/>

      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <CareRequestCard/>

      </div>
      <div
        className={toggleState === 5 ? "content  active-content" : "content"}
      >
        <OwnerCandidateCard/>
        
      </div>
      <div
        className={toggleState === 6 ? "content  active-content" : "content"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
          nostrum rerum laudantium totam unde adipisci incidunt modi alias!
          Accusamus in quia odit aspernatur provident et ad vel distinctio
          recusandae totam quidem repudiandae omnis veritatis nostrum
          laboriosam architecto optio rem, dignissimos voluptatum beatae
          aperiam voluptatem atque. Beatae rerum dolores sunt.
        </p>
      </div>
    </div>
  </div>
);
}

export default OwnerTabs
