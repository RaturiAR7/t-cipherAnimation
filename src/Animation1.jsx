import "./App.css";
import { useRef, useEffect, useState } from "react";

import RoboRender from "./RoboRender"; ///3 -D model rendering component

const Animation1 = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='main' ref={sectionRef}>
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
      {animate && (
        <div>
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
      )}
    </div>
  );
};

export default Animation1;

// import React, { useEffect, useRef } from 'react';

// const AnimatedSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Start your animation logic here
//           section.classList.add('animate'); // Add a CSS class for animation
//         } else {
//           // Stop or reset your animation logic here
//           section.classList.remove('animate'); // Remove the CSS class for animation
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       threshold: 0.5, // Adjust the threshold as needed
//     });

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <div ref={sectionRef}>
//       {/* Your component content goes here */}
//     </div>
//   );
// };
