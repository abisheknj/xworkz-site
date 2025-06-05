import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BootcampIntro from "@/components/BootcampIntro";
import BootcampBenefits from "@/components/BootcampBenefits";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnrollmentForm from "@/components/EnrollmentForm";
import OurTeam from "@/components/OurTeam";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <CurriculumTimeline />
      <BootcampBenefits />
      <TestimonialsSection />
      <OurTeam />
      <EnrollmentForm />
      <Footer />
    </div>
  );
};

export default Index;
