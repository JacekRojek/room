import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function RoomModel() {
  const gltf = useLoader(GLTFLoader, "../assets/room.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default RoomModel;
