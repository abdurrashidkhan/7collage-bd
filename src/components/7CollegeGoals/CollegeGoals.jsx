"use client";

import dynamic from "next/dynamic";
import loadingAnimation from "@/assert/svg/2nd.json";
import { useEffect, useRef, useState } from "react";

// Dynamic import of lottie-web with SSR disabled
const LottiePlayer = dynamic(() => import("lottie-web"), { ssr: false });

export default function CollegeGoals() {
  const animationContainer = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // For tracking load status

  useEffect(() => {
    const loadAnimation = async () => {
      const lottie = (await LottiePlayer).default;

      if (lottie && animationContainer.current) {
        const animationInstance = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
        });

        setIsLoaded(true);

        // Clean up the animation on component unmount
        return () => animationInstance.destroy();
      }
    };

    if (typeof window !== "undefined") {
      loadAnimation();
    }
  }, []); // Empty dependency array ensures it runs only once

  if (!isLoaded) {
    return <div>Loading animation...</div>;
  }

  return (
    <section className="py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center justify-items-center gap-8">
          {/* Lottie Animation */}
          <div ref={animationContainer} className="w-full h-auto"></div>

          {/* Text Content */}
          <div>
            <div>
              <h1 className="text-4xl font-bold">
                <strong>7.</strong>College Goals
              </h1>
              <p className="text-base text-gray-700 font-medium my-5">
                The "7 College Goal of Bangladesh" typically refers to the
                vision and objectives associated with the seven government
                colleges affiliated with the University of Dhaka. These colleges
                play a significant role in providing quality higher education to
                a large number of students across Bangladesh.
              </p>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-5">
                <div>
                  <h2 className="text-xl font-semibold">50-60%</h2>
                  <p className="text-base text-gray-600">
                    On average, about of students from seven colleges can
                    complete an honours (graduate) course.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">70-80%</h2>
                  <p className="text-base text-gray-600">
                    On average, about of students from seven colleges can
                    complete an honours (graduate) course.
                  </p>
                </div>
              </div>
              <strong className="block mt-3 text-base text-gray-800">
                The remaining 40-50% drop out due to financial problems, lack of
                interest in studies, or other reasons.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
