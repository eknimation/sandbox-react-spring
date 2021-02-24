import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Simpletoggle = () => {
  const [toggled, setToggled] = useState(false);

  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));

  const backgroundStyle = {
    backgroundColor: "#ddd",
    cursor: "pointer",
    height: 50,
    width: 100,
  };

  const knobStyle = {
    marginLeft: x,
    backgroundColor: "#444",
    height: 50,
    width: 50,
  };

  return (
    <div>
      <h3>Simple Toggle</h3>
      <div // Background
        style={backgroundStyle}
        onClick={() => {
          set({ x: toggled ? 0 : 50 });
          setToggled(!toggled);
        }}
      >
        <animated.div // Knob
          style={knobStyle}
        ></animated.div>
      </div>
    </div>
  );
};

export default Simpletoggle;
