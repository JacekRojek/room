import { Suspense } from "react";
import Computer from "./Computer";
import Desk from "./Desk";
import Painting from "./Painting";
import Plant from "./Plant";
import Walls from "./Walls";

function RoomModel() {
  return (
    <Suspense fallback={null}>
      <Walls />
      <Desk />
      <Plant />
      <Computer />
      <Painting />
    </Suspense>
  );
}

export default RoomModel;
