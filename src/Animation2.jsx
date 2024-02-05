import "./App.css";
import { useState, useEffect } from "react";
import RoboRender from "./RoboRender"; ///3-D model rendering component
const Animation2 = () => {
  const [orbitNum, setOrbitNum] = useState(1);
  //////Animation 2
  console.log(orbitNum);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the state every 5 seconds
      if (orbitNum < 6) setOrbitNum(orbitNum + 1);
    }, 5000);
    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [orbitNum]);
  return (
    <div className='main'>
      <div className='initial'>
        <div className='details'>
          <h1>What all do we offer</h1>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            nobis odit repudiandae explicabo vel quia nam architecto, saepe
            beatae fuga.
          </h4>
        </div>
        <div className='btn-container'>
          <button className='btn'>Schedule a call</button>
          <RoboRender /> {/* {3D model rendering component} */}
        </div>
      </div>
      <div className='space'>
        <div className='sun'>
          <img src='TCIPHERLOGO.png' alt='TCIPHERLOGO' />
        </div>
        <div className='mercury-outline'></div>
        <div className='venus-outline'>
          <div className={`box venus${orbitNum > 1 ? 2 : ""}1`}>UI & UX</div>
          <div className={`box venus${orbitNum > 1 ? 2 : ""}2`}>
            Product Strategy
          </div>
        </div>
        <div className='earth-outline'>
          <div className={`box earth${orbitNum > 2 ? 3 : ""}1`}>
            Custom Software
          </div>
          <div className={`box earth${orbitNum > 2 ? 3 : ""}2`}>
            Quality Assurance
          </div>
        </div>
        <div className='mars-outline'>
          <div className={`box mars${orbitNum > 3 ? 4 : ""}1`}>
            ERP management
          </div>
          <div className={`box mars${orbitNum > 3 ? 4 : ""}2`}>
            Stack Management
          </div>
        </div>
        <div className='jupiter-outline'>
          <div className={`box jupiter${orbitNum > 0 ? 1 : ""}1`}>
            Web Application
          </div>
          <div className={"box jupiterStationary"}>Sales</div>
          <div className={`box jupiter${orbitNum > 0 ? 1 : ""}2`}>
            Mobile App
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation2;
