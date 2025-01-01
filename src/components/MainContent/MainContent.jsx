import collageImage from "@/assert/svg/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
const MainContent = () => {
  return (
    <div className="w-full h-[100vh] sm:h-[60vh] md:h-[100vh] mx-auto relative bg-[#ffffff]">
      <div className="content_center  flex flex-col-reverse lg:flex-row items-center justify-center justify-items-center gap-5 px-5">
        {/* products description */}
        <div className=" ">
          <h2 className="text-2xl pb-2">
            <strong className="text-2xl sm:text-5xl sm:leading-[60px]">
              Discover Your Future at Top Colleges Today
            </strong>
          </h2>
          <p className="py-2 text-base font-medium text-slate-800 pt-10">
            Start your journey towards higher education with our comprehensive
            college search platform. Find the perfect college that fits your
            aspirations and goals.
          </p>
          <div className="flex items-center gap-5">
            <div className="">
              <Link
                className="bg-slate-800 text-slate-100 px-5 py-2 rounded hover:tracking-[2px] ease-in-out duration-500"
                href="/admission"
              >
                Admission &rarr;
              </Link>
            </div>
            <div className="py-5">
              <div className="">
                <Link
                  className="outline outline-[1px] px-5 py-2 rounded hover:tracking-[2px] ease-in-out duration-500"
                  href="/learn-more"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* products image */}
        <div className="w-[100%] sm:w-[75%]">
          <Image
            src={collageImage}
            alt="loading"
            placeholder="blur"
            quality={100}
            className="rounded  w-[70%] h-auto mx-auto "
          ></Image>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MainContent;
