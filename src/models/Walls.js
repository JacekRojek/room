import room from "../assets/room5.glb";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Walls() {
  const { nodes, materials } = useGLTF(room);
  const ref = useRef();
  return (
    <>
      <group ref={ref} dispose={null}>
        <mesh
          geometry={nodes.Wall.geometry}
          material={materials.Wall}
          position={nodes.Wall.position}
          rotation={nodes.Wall.rotation}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          position={nodes.Wall2.position}
          geometry={nodes.Wall2.geometry}
          rotation={nodes.Wall2.rotation}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          position={nodes.Celling.position}
          geometry={nodes.Celling.geometry}
          rotation={nodes.Celling.rotation}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          position={nodes.Floor.position}
          geometry={nodes.Floor.geometry}
          rotation={nodes.Floor.rotation}
          material={materials.Floor}
        />
      </group>
    </>
  );
}

export default Walls;
