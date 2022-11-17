import room from "../assets/room5.glb";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Computer() {
  const { nodes, materials } = useGLTF(room);
  const ref = useRef();
  return (
    <>
      <group ref={ref} dispose={null}>
        <mesh
          geometry={nodes.Monitor.children[0].geometry}
          position={nodes.Monitor.position}
          rotation={nodes.Monitor.rotation}
          scale={nodes.Monitor.scale}
          material={materials.Black}
        >
          <mesh geometry={nodes.Monitor.children[1].geometry}>
            <meshBasicMaterial color={"blue"} />
          </mesh>
        </mesh>
        <mesh
          geometry={nodes.Monitor2.children[0].geometry}
          position={nodes.Monitor2.position}
          rotation={nodes.Monitor2.rotation}
          material={materials.Black}
        ></mesh>
        <mesh
          geometry={nodes.PC.geometry}
          position={nodes.PC.position}
          rotation={nodes.PC.rotation}
          material={materials.Black}
        />
      </group>
    </>
  );
}

export default Computer;
