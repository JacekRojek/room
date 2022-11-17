import {
  CubicBezierLine,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  BufferGeometry,
  Line,
  CubicBezierCurve3,
  LineBasicMaterial,
  Vector3,
} from "three";
import { useControls } from "leva";
import RoomModel from "../models/RoomModel";

const curve = new CubicBezierCurve3(
  new Vector3(-2, 1, 8),
  new Vector3(-1, 2, 6),
  new Vector3(2, 1, 5),
  new Vector3(1, 3, 4)
);

function MainStage() {
  const camera = useThree(({ camera }) => camera);
  const scene = useThree(({ scene }) => scene);
  const { position, point1 } = useControls({
    position: { value: 0, min: 0, max: 1 },
    point1: { value: { x: -2, y: 1, z: 8 }, step: 0.1 },
  });
  useEffect(() => {
    console.log("useEffect");
    const points = curve.getPoints(50);
    const geometry = new BufferGeometry().setFromPoints(points);

    const material = new LineBasicMaterial({ color: 0xff0000 });

    // Create the final object to add to the scene
    const curveObject = new Line(geometry, material);
    scene.add(curveObject);
    camera.position.set(curve.getPointAt(0.5));
  }, []);

  useEffect(() => {
    console.log("useEffect:: position", position);
    camera.position.fromArray(curve.getPointAt(position).toArray());
  }, [position]);

  useEffect(() => {
    console.log("useEffect:: point", point1);
    console.log("camera.position", camera.position);
    camera.position.fromArray(Object.values(point1));
  }, [point1]);

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
      <PerspectiveCamera zoom={1} />
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[1, 2, 3]} intensity={1} />
      <PresentationControls snap makeDefault>
        <RoomModel />
      </PresentationControls>
    </Stage>
  );
}

export default MainStage;
