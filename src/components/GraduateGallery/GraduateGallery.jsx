import college5 from "@/assert/colleges/640px-Govt._Shaheed_Suhrawardi_College_10.jpeg";
import college4 from "@/assert/colleges/Begum_Badrunnesa_Govt._College.jpg";
import college3 from "@/assert/colleges/edanCollege.jpg";
import college7 from "@/assert/colleges/JKKNIU_Top_View.jpg";
import college1 from "@/assert/colleges/kabi-nazrul-college-e5079938-6d55-4f92-9ccf-dbf4c8d9c1c-resize-750.jpg";
import college2 from "@/assert/colleges/ob_1678024224.jpg";
import college6 from "@/assert/colleges/সরকারি_বাঙলা_কলেজ_ভবন.jpg";
import Image from "next/image";
export default function GraduateGallery() {
  const colleges = [
    { collageName: "Kabi Nazrul Govt. College", image: college1 },
    { collageName: "Dhaka College", image: college2 },
    { collageName: "Eden Mohila College", image: college3 },
    { collageName: "Begum Badrunnesa Govt. Girls College", image: college4 },
    { collageName: "Government Shaheed Suhrawardy College", image: college5 },
    { collageName: "Govt. Bangla College", image: college6 },
    { collageName: "Govt. Titumir College", image: college7 },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="text-4xl text-slate-800 font-semibold my-4">
            Graduate Gallery
          </h2>
          <p>Explore the vibrant achievements of our graduates.</p>
        </div>
        <div className="">
          <div className="gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {colleges?.map((c, index) => (
              <div className="" key={index}>
                <Image src={c?.image} alt="loading"></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
