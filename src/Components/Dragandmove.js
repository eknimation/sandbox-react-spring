import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useEffect, useRef } from "react";

import "../styles/Dragandmove.css";

const Dragandmove = () => {
  const offsetX = useRef();
  const RANGE = 300 - 50;

  const [{ moveX }, setX] = useSpring(() => ({ moveX: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], previous, initial, offset, xy }) => {
      const newX = mx + initial[0] - offsetX.current - 25;

      if (newX < 0) return;
      if (newX >= RANGE) {
        console.log("Finished");
        return;
      }

      setX({ moveX: newX });
    }
  );

  useEffect(() => {
    offsetX.current = document
      .querySelector("#pointA")
      .getBoundingClientRect().left;
  }, []);

  return (
    <div>
      <h3>Simple drag</h3>
      <div className="dragBackground">
        <div id="pointB" className="dragEnd">
          End
        </div>
        <animated.div
          id="pointA"
          {...bind()}
          className="dragMove"
          style={{
            transform: moveX.interpolate((x) => `translate3d(${x}px, 0px, 0)`),
          }}
        />
      </div>
    </div>
  );
};

export default Dragandmove;
