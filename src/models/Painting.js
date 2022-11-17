import room from "../assets/room5.glb";
import painting from "../assets/test.jpg";
import { Image, useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import AnimationController from "../setup/AnimationController";

function Painting() {
  const { nodes, materials, animations } = useGLTF(room);
  const texture = useTexture(painting);
  const ref = useRef();
  return (
    <>
      <group dispose={null}>
        <mesh
          ref={ref}
          castShadow
          geometry={nodes.Painting.geometry}
          position={nodes.Painting.position}
          material={materials.Wood}
        >
          <Image
            texture={texture}
            scale={[1, 1, 1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      </group>
      <AnimationController targetRef={ref} animations={animations} />
    </>
  );
}

export default Painting;
