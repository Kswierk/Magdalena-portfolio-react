import React, { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "../components/HomeView/HeroSection/HeroSection";
import Brief from "../components/HomeView/Brief/Brief";
import HowSection from "../components/HomeView/HowSection/HowSection";
import SlideView from "../components/HomeView/SlideView/SlideView";
import ContactUs from "../components/ContactForm/ContactForm";

const HomeWraper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userVh = document.documentElement.clientHeight;
  return (
    <>
      <HeroSection
        arrowClicked={() =>
          window.scrollTo({ top: userVh, behavior: "smooth" })
        }
      />
      <HomeWraper>
        <Brief />
        <HowSection />
        <SlideView />
      </HomeWraper>
      <ContactUs />
    </>
  );
}

export default Home;
