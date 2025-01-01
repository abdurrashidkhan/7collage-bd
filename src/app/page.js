import CollegeGoals from "@/components/7CollegeGoals/CollegeGoals";
import MainPage from "@/components/MainPage/MainPage";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <CollegeGoals />
    </>
  );
}