import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderImage from "../components/AboutView/HeaderImage/HeaderImage";
import InfoText from "../components/AboutView/InfoText/InfoText";
import TrainerCard from "../components/AboutView/TrainerCard/TrainerCard";
import TrainerText from "../components/AboutView/TrainerText/TrainerText";

const CardWraper = styled.div`
  background-color: #eee;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const PageWraper = styled.div`
  margin-bottom: 40px;
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWraper>
      <HeaderImage />
      <InfoText />
      <CardWraper>
        <TrainerCard madzia name="Magda" position="trenerka" />
        <TrainerText />
      </CardWraper>
      <CardWraper>
        <TrainerCard name="Kacper" position="trener" />
        <TrainerText />
      </CardWraper>
    </PageWraper>
  );
};

export default About;
