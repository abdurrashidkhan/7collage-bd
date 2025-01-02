import CollegeGoals from "@/components/7CollegeGoals/CollegeGoals";
import CollegeFeaturesSection from "@/components/CollegeFeaturesSection.jsx/CollegeFeaturesSection";
import Footer from "@/components/Footer/Footer";
import GraduateGallery from "@/components/GraduateGallery/GraduateGallery";
import MainPage from "@/components/MainPage/MainPage";
import Navbar from "@/components/Navbar/Navbar";
import OurReview from "@/components/Review/OurReview";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <CollegeGoals />
      <CollegeFeaturesSection />
      <GraduateGallery />
      <OurReview />
      <Footer />
    </>
  );
}