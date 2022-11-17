import { Scroll, ScrollControls } from "@react-three/drei";

function ScrollSetup({ children }) {
  return (
    <ScrollControls
      pages={3} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={4} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false} // Can also scroll infinitely (default: false)
    >
      {/* You can have components in here, they are not scrolled, but they can still
          react to scroll by using useScroll! */}
      {/* <Scroll>{children}</Scroll> */}
      {children}
    </ScrollControls>
  );
}

export default ScrollSetup;
