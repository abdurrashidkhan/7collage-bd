"use client"
import loadingAnimation from "@/assert/svg/loading.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function Loading() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
    });

    // Clean up the animation on component unmount
    return () => animationInstance.destroy();
  }, []);

  return (
    <div className=" w-full h-[100vh] fixed top-0 left-0 mx-auto z-[999999]">
      <div className="content_center" ref={animationContainer} style={{ width: 500, height: 500 }}></div>
    </div>
  );
}
