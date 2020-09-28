import React from "react";
import styled from "styled-components";
import HeaderImage from "../components/AboutView/HeaderImage/HeaderImage";
import InfoText from "../components/AboutView/InfoText/InfoText";
import TrainerCard from "../components/AboutView/TrainerCard/TrainerCard";
import TrainerText from "../components/AboutView/TrainerText/TrainerText";

const Wraper = styled.div`
  background-color: #eee;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;

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
        <TrainerCard name="Magda" position="trenerka" />
        <TrainerText />
      </Wraper>
      <Wraper>
        <TrainerCard name="Kacper" position="trener" />
        <TrainerText />
      </Wraper>
    </div>
  );
};

export default About;
