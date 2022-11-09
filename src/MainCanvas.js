import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RoomModel from "./RoomModel";

function MainCanvas() {
  return (
    <div id="canvas-container">
      <Canvas
        style={{
          width: window.innerWidth,
          backgroundColor: "black",
          height: window.innerHeight / 2,
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <RoomModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default MainCanvas;
