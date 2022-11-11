import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import room from "./assets/room2.glb";

export default function Room(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(room);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  console.log("nodes", nodes);
  console.log("materials", materials);
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.006"]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cube003"].geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}
