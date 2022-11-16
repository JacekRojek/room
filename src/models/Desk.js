import room from "../assets/room5.glb";
import { Html, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Desk() {
  const { nodes, materials } = useGLTF(room);
  const ref = useRef();
  return (
    <>
      <group ref={ref} dispose={null}>
        <mesh
          geometry={nodes.DeskPart.geometry}
          material={materials.Desk}
          position={nodes.DeskPart.position}
        >
          <Html
            scale={1}
            rotation={[0, 0, 0]}
            position={[1, 1, 0]}
            transform
            occlude
          >
            <div className="annotation">
              Hello <span style={{ fontSize: "1.5em" }}>😀</span>
            </div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          position={nodes.Desk.position}
          geometry={nodes.Desk.geometry}
          material={materials.Desk}
        />
      </group>
    </>
  );
}

export default Desk;
