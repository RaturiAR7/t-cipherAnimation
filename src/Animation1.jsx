import "./App.css";
import RoboRender from "./RoboRender"; ///3 -D model rendering component
const Animation1 = () => {
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
          <div className={`box venus21`}>UI & UX</div>
          <div className={`box venus22`}>Product Strategy</div>
        </div>
        <div className='earth-outline'>
          <div className={`box earth31`}>Custom Software</div>
          <div className={`box earth32`}>Quality Assurance</div>
        </div>
        <div className='mars-outline'>
          <div className={`box mars41`}>ERP management</div>
          <div className={`box mars42`}>Stack Management</div>
        </div>
        <div className='jupiter-outline'>
          <div className={`box jupiter11`}>Web Application</div>
          <div className={"box jupiterStationary"}>Sales</div>
          <div className={`box jupiter12`}>Mobile App</div>
        </div>
      </div>
    </div>
  );
};

export default Animation1;
