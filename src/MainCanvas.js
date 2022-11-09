import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RoomModel from "./RoomModel";

function MainCanvas() {
  return (
    <div id="canvas-container">
      <Canvas
        style={{
          width: window.innerWidth - 50,
          height: window.innerHeight - 50,
        }}
      >
        <OrthographicCamera makeDefault position={[0, 0, 20]} />
        <Stage
          contactShadow={{
            blur: 1,
            opacity: 0.5,
            position: [0, 0, 0],
          }}
          shadows={true}
          intensity={0.1}
          environment={"sunset"}
          preset={"rembrandt"}
        >
          <ambientLight intensity={0.1} />
          <directionalLight color="blue" position={[1, 2, 3]} intensity={1} />
          <RoomModel />
          47{" "}
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default MainCanvas;
