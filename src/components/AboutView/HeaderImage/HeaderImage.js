import React from "react";
import styled from "styled-components";
import my from "../../../assets/img/my.jpg";

const HeaderImg = styled.div`
  background: url(${my}) no-repeat center -50px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 70vh;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

// const ImgOpacity = styled.div`
//   position: absolute;
//   display: block;
//   background-color: black;
//   opacity: 0.3;
//   /* top: 60px; */
//   height: 70vh;
//   width: 100%;
//   z-index: 6;
// `;

const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.5rem;
  z-index: 5;

  @media (min-width: 800px) {
    font-size: 4rem;
  }
`;

const HeaderImage = () => (
  <>
    <HeaderImg>
      {/* <ImgOpacity /> */}
      <HeaderText>poznajmy się</HeaderText>
    </HeaderImg>
  </>
);

export default HeaderImage;
