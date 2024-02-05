import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robo from "./Robo";
const RoboRender = () => {
  return (
    <div className='RoboDiv'>
      <Canvas
        gl={{ preserveDrawingBuffer: false }}
        frameloop='demand'
        camera={{
          fov: window.innerWidth >= 1000 ? 8 : 10,
          position: [45, 10, 5],
        }}
      >
        <ambientLight intensity={7}>
          <pointLight position={[10, 10, 10]} intensity={9} />
        </ambientLight>
        <Robo />
        <OrbitControls
          autoRotate={window.innerWidth >= 1000 ? true : false}
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default RoboRender;
