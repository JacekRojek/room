import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import room from "./assets/room.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function RoomModel() {
  const gltf = useLoader(GLTFLoader, room);
  return (
    <Suspense fallback={null}>
      <group position={[-1, -1, 5]}>
        <primitive object={gltf.scene} />
      </group>
    </Suspense>
  );
}

export default RoomModel;
