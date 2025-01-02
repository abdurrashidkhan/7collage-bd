"use client";

import loadingAnimation from "@/assert/svg/review.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import OurReviewSlider from "./OurReviewSlider";
import "./style.css";
export default function OurReview() {
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
    <section className="container mx-auto px-2 py-10">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
          <div className="">
            <div className="">
              <div className="w-[98%] sm:w-[50%] h-auto   mx-auto ">
                <div
                  ref={animationContainer}
                  className="w-full h-auto mx-auto"
                ></div>
              </div>
              <div className="px-4 pt-5 ">
                <h1 className="text-3xl font-medium pb-6 sm:pb-0">
                  <strong className="text-4xl font-semibold text-slate-800">
                    Student
                  </strong>{" "}
                  Feedback
                </h1>
                <p className="pt-5">
                  Your journey begins here. See how our students describe their
                  experiences and how we’ve helped them excel academically and
                  personally.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <OurReviewSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
