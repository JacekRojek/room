import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import room from "./assets/room2.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function RoomModel() {
  const gltf = useLoader(GLTFLoader, room);
  return (
    <Suspense fallback={null}>
      <group scale={[50, 50, 50]} position={[-100, 0, 0]}>
        <primitive object={gltf.scene} />
      </group>
    </Suspense>
  );
}

export default RoomModel;
