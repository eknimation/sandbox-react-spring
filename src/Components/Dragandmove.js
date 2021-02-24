import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import "../styles/Dragandmove.css";

const Dragandmove = () => {
  const [{ moveX }, setX] = useSpring(() => ({ moveX: 0 }));
  const bind = useDrag(({ down, xy: [mx] }) => {
    if (down) {
      setX({ moveX: mx });
    }
  });

  return (
    <div className="dragBackground">
      <div className="dragEnd">End</div>
      <animated.div
        {...bind()}
        className="dragMove"
        style={{
          transform: moveX.interpolate((x) => `translate3d(${x}px, 0px, 0)`),
        }}
      />
    </div>
  );
};

export default Dragandmove;
