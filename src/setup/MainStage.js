import {
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import RoomModel from "../models/RoomModel";

function MainStage() {
  return (
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
      <PerspectiveCamera zoom={1} position={[10, -10, -10]} />
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[1, 2, 3]} intensity={1} />
      <PresentationControls snap makeDefault>
        <RoomModel />
      </PresentationControls>
    </Stage>
  );
}

export default MainStage;
