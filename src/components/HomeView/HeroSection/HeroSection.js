import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../Button/Button";
import Kacperbcg from "../../../assets/img/Kacperbcg.jpg";
import Header from "./Header";

const HeroImg = styled.div`
  background: url(${Kacperbcg}) no-repeat top fixed;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: calc(100vh - 69px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const arrows = keyframes`
   0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
`;

const Arrow = styled.div`
  /* margin-top: 100px; */
  /* position: absolute; */
  /* top: 75%;
  left: 50%;
  transform: translate(-50%, -50%); */
  z-index: 100;
  cursor: pointer;
`;

const ArrowDown = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  border-bottom: 5px solid #f4f4f4;
  border-right: 5px solid #f4f4f4;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${arrows} 2s infinite;

  &:nth-child(2) {
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    animation-delay: -0.4s;
  }
`;

const ImgOpacity = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.2;
  height: calc(100vh - 69px);
  width: 100%;
  z-index: 2;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 100vh;
`;

const HeroSection = (props) => {
  return (
    <>
      <ImgOpacity />
      <HeroImg>
        <Header headerText={"Zbuduj swoją wymarzoną sylwetkę"} />
        <Button linkto="contact" btntext="skontaktuj się z nami" />
        <Arrow onClick={props.arrowClicked}>
          <ArrowDown />
          <ArrowDown />
        </Arrow>
      </HeroImg>
      <HorizontalLine id="brief" />
    </>
  );
};

export default HeroSection;
