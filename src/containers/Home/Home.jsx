import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import dogsHome from '../../img/dogsHome.png';
import loverDog from '../../img/loverDog.png';


// <h1>Cause we love time, we love dogs.</h1>

function Home(props) {

  // HOOKS
  


  // FUNCTIONS



  return (
    <div className="homeContainer">
      <Header/>
      <Navbar/>
      <div className="mainHome">

        <div className="sectionHome">

          <div className="h1HomeMaster">

              <div className="h1Home">
                <h1>Do you want to take care of your neighbor's dog?</h1>
                <h1>Or do you prefer that they take your dog for a walk?</h1>                
              </div>

              <img className="dogsHome" src={dogsHome} alt="dogsHome"/>

          </div>

          <div className="h2HomeMaster">

              <div className="h2Home">
                <h2>Dog lovers is your corner to make new friends, new pals.</h2>
                <h2>While you finish work, go on vacation, or walk someone else's dog.</h2>
              </div>

              <img className="loverDog" src={loverDog} alt="LoverDog"/>
              
          </div>

        </div>

      </div>
      <div className="spacebar"></div>
      <Footer/>  
    </div>
  )
}

export default Home
