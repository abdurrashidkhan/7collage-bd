"use client"
import allEvent from "@/database/find/allEvents/allEvents";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Events() {
  const [allContent, setAllContent] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  const contentLoad = async () => {
    setLoading(true);
    const { allEvents } = await allEvent();
    setAllContent(allEvents)
    setLoading(false);
  };
  console.log(allContent)
  // data faceting
  useEffect(() => {
    contentLoad();
  }, []);

  if (IsLoading) {
    return <Loading></Loading>
  }
  return (
    <section>
      <div className="container mx-auto px-4 py-10 pt-[8rem]">
        <div className="">
          <div className="text-center">
            <h1 className="text-4xl  text-slate-700 font-semibold">Our Collages Events</h1>
            <p className="text-slate-700 font-medium py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quam cum eius expedita commodi debitis libero nihil voluptas, perspiciatis minima iure harum aspernatur facilis voluptatum exercitationem porro corrupti dolores ipsa nisi autem, quod praesentium minus? Qui facere vitae ipsum quasi quisquam modi sequi, ea, quia, ducimus optio voluptas. Amet, tempora.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {/* data find  */}
          </div>
        </div>
      </div>
    </section>
  )
}
