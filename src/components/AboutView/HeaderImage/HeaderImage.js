import React from "react";
import styled from "styled-components";
import KacperBcg from "../../../assets/img/kacperbcg.jpg";

const HeaderImg = styled.div`
  background: url(${KacperBcg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.5rem;
`;

const HeaderImage = () => (
  <HeaderImg>
    <HeaderText>poznajmy się</HeaderText>
  </HeaderImg>
);

export default HeaderImage;
