import { useEffect, useState, useCallback } from "react";

useEffect;
const MediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width:${width}px)`);

    if (media.addEventListener) {
      media.addEventListener("change", updateTarget);
    } else {
      media.addListener(updateTarget);
    }

    if (media.matches) {
      setTargetReached(true);
    }

    if (media.removeEventListener) {
      return () => media.removeEventListener("change", updateTarget);
    } else {
      // compatibility for browser that sdont have removeEventListener
      return () => media.removeListener(updateTarget);
    }
  }, [width, updateTarget]);

  return targetReached;
};
