import React from "react";
import HeroSection from "../components/HomeView/HeroSection/HeroSection";
import Brief from "../components/HomeView/Brief/Brief";
import HowSection from "../components/HomeView/HowSection/HowSection";
import SlideView from "../components/HomeView/SlideView/SlideView";
import ContactUs from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Brief />
      <HowSection />
      <SlideView />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
