"use client";

import loadingAnimation from "@/assert/svg/loading.json";
import dynamic from "next/dynamic";

// Dynamically import lottie-web with SSR disabled
const LottiePlayer = dynamic(() => import("lottie-web"), { ssr: false });

import { useEffect, useRef, useState } from "react";

export default function Loading() {
  const animationContainer = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const lottie = (await LottiePlayer).default;

        if (!animationContainer.current) return;

        const animationInstance = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
        });

        setIsLoaded(true);

        // Clean up animation instance on component unmount
        return () => animationInstance.destroy();
      } catch (err) {
        setError("An error occurred while loading the animation.");
        console.error("Error loading animation: ", err); // Log the error
      }
    };

    if (typeof window !== "undefined") {
      loadAnimation();
    }

  }, []); // Empty dependency array ensures it runs only once on mount

  // If there's an error, display it
  if (error) {
    return <div>{error}</div>;
  }

  // If loading, display loading text
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div ref={animationContainer} style={{ width: "200px", height: "200px" }} />
    </div>
  );
}
