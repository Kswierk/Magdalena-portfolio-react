import React from "react";
import styled from "styled-components";
import HeaderImage from "../components/AboutView/HeaderImage/HeaderImage";
import InfoText from "../components/AboutView/InfoText/InfoText";
import TrainerCard from "../components/AboutView/TrainerCard/TrainerCard";
import TrainerText from "../components/AboutView/TrainerText/TrainerText";
import Footer from "../components/Footer/Footer";

const Wraper = styled.div`
  background-color: #eee;
  padding: 20px 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const About = () => {
  return (
    <div>
      <HeaderImage />
      <InfoText />
      <Wraper>
        <TrainerCard name="Madzia" position="Główna trenerka" />
        <TrainerText />
      </Wraper>
      <Wraper>
        <TrainerCard name="Kacper" position="Główny trener" />
        <TrainerText />
      </Wraper>
      <Footer />
    </div>
  );
};

export default About;
