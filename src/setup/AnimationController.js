import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

function AnimationController({ targetRef, animations }) {
  const { actions } = useAnimations(animations, targetRef);

  // Storybook Knobs
  const selectedAction = "PlantAction";
  const blendDuration = 1;

  useEffect(() => {
    actions[selectedAction]?.fadeOut(blendDuration).play();
    return () => void actions[selectedAction]?.fadeOut(blendDuration);
  }, [actions, selectedAction, blendDuration]);

  return null;
}

export default AnimationController;
