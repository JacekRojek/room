import room from "../assets/room5.glb";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import AnimationController from "../setup/AnimationController";

function Plant() {
  const { nodes, materials, animations } = useGLTF(room);
  const ref = useRef();
  return (
    <>
      <group dispose={null}>
        {/* <mesh
          geometry={nodes.Pot.geometry}
          material={materials.Pot}
          position={nodes.Pot.position}
        /> */}
        <mesh
          ref={ref}
          castShadow
          geometry={nodes.Plant.geometry}
          position={nodes.Plant.position}
          material={materials.Plant}
        />
      </group>
      <AnimationController targetRef={ref} animations={animations} />
    </>
  );
}

export default Plant;
