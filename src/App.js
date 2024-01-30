import './App.css';
import React, { useEffect } from "react";
import ProfileCard from './containers/ProfileCard';
import MainContainer from './containers/mainContainer';
import Portfolio from './containers/Portfolio';
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

function App() {
  useEffect(() => {
    WAVES ({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x77628e,
      shininess: 0.00,
      waveSpeed: 0.55,
      zoom: 0.72
    })
  }, []);

  return (
     <div className="App">
      <div className="bg" id="vanta"> 
        <div className="scrollable">
          <ProfileCard/>
          <MainContainer/>
          <Portfolio/>
        </div>
      </div>
    </div>
  );
}

export default App;