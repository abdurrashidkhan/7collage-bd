"use client";

import dynamic from "next/dynamic";
import loadingAnimation from "@/assert/svg/loading.json";

// Dynamically import lottie-web with SSR disabled
const LottiePlayer = dynamic(() => import("lottie-web"), { ssr: false });

import { useEffect, useRef, useState } from "react";

export default function Loading() {
  const animationContainer = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    if (animationContainer.current) {
      const loadAnimation = async () => {
        try {
          const lottie = (await LottiePlayer).default;

          if (lottie) {
            lottie.loadAnimation({
              container: animationContainer.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: loadingAnimation,
            });

            setIsLoaded(true);
          }
        } catch (err) {
          setError("An error occurred while loading the animation.");
          console.error(err); // Log error for debugging
          setIsLoaded(false);
        }
      };

      loadAnimation();
    }
  }, []); // Empty dependency array ensures it runs only once

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
