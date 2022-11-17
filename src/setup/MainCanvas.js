import { Canvas } from "@react-three/fiber";
import MainStage from "./MainStage";

function MainCanvas() {
  return (
    <div id="canvas-container">
      <Canvas
        style={{
          width: window.innerWidth - 50,
          height: window.innerHeight - 50,
        }}
      >
        <MainStage />
      </Canvas>
    </div>
  );
}

export default MainCanvas;
