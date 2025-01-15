import { useEffect, useState } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(window.screen.availWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  const isSmallScreened = screenSize <= 480;
  return { size: screenSize, isSmallScreened } as const;
}

export default useScreenSize;
