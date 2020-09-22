import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HomeView/HeroSection/HeroSection";
import Brief from "../components/HomeView/Brief/Brief";
import HowSection from "../components/HomeView/HowSection/HowSection";
import SlideView from "../components/HomeView/SlideView/SlideView";
import ContactUs from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const HomeWraper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeWraper>
        <Brief />
        <HowSection />
        <SlideView />
      </HomeWraper>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
