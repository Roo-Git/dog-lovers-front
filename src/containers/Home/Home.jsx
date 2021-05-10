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
      <div className="home-main">

        <div className="home-master-section">

          <div className="home-super-first-section">

              <div className="home-first-section">

                <h3>invisible</h3>

                <h2>Do you want to take care of your neighbor's dog?</h2>
                <br />
                <h2>Or do you prefer that they take your dog for a walk?</h2>                
              </div>

              <img className="home-dogs-img" src={dogsHome} alt="dogsHome"/>

          </div>

          <div className="home-super-second-section">

              <div className="home-second-section">

                <h3>invisible</h3>

                <h2>Dog lovers is your corner to make new friends, new pals.</h2>
                <br />
                <h2>While you finish work, go on vacation, or walk someone else's dog.</h2>

                <h3>invisible</h3>

              </div>

              <img className="home-lover-img" src={loverDog} alt="LoverDog"/>
              
          </div>

        </div>

      </div>
      <div className="space-bar"></div>
      <Footer/>  
    </div>
  )
}

export default Home
