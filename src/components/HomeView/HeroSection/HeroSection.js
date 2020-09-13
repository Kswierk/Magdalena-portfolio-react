import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import KacperBcg from "../../../assets/img/kacperbcg.jpg";
import Header from "../Header/Header";

const HeroImg = styled.div`
  background: url(${KacperBcg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: calc(100vh - 49px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <HeroImg>
      <Header />
      <Button btntext="bezpłatne konsultacje" />
    </HeroImg>
  );
};

export default HeroSection;
