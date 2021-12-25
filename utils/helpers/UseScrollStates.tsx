import { useLayoutEffect, useState } from "react";

function UseScrollStates() {
  const [scrollStates, setScrollStates] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      setScrollStates([window.scrollY, window.scrollY]);
    };

    window.addEventListener("scroll", updateScreenSize);
    return () => {
      window.removeEventListener("scroll", updateScreenSize);
    };
  }, []);

  return scrollStates;
}

export default UseScrollStates;
