import React from "react";
import HeroSection from "../components/HomeView/HeroSection/HeroSection";
import Brief from "../components/HomeView/Brief/Brief";
import HowSection from "../components/HomeView/HowSection/HowSection";
import SlideView from "../components/HomeView/SlideView/SlideView";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Brief />
      <HowSection />
      <SlideView />
    </>
  );
};

export default Home;
