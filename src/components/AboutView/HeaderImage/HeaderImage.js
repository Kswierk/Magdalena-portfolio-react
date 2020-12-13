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

const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 5;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const HeaderImage = () => (
  <>
    <HeaderImg>
      <HeaderText>poznajmy się</HeaderText>
    </HeaderImg>
  </>
);

export default HeaderImage;
