import CollegeGoals from "@/components/7CollegeGoals/CollegeGoals";
import CollegeFeaturesSection from "@/components/CollegeFeaturesSection.jsx/CollegeFeaturesSection";
import GraduateGallery from "@/components/GraduateGallery/GraduateGallery";
import MainPage from "@/components/MainPage/MainPage";
import OurReview from "@/components/Review/OurReview";

export default function Home() {
  return (
    <>

      <MainPage />
      <CollegeGoals />
      <CollegeFeaturesSection />
      <GraduateGallery />
      <OurReview />
    </>
  );
}