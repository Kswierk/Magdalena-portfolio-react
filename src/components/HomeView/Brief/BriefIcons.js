import React from "react";

import styled from "styled-components";
import { Trophy } from "@styled-icons/boxicons-regular/Trophy";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";

const IconContent = [
  {
    icon: <Trophy color={"#fc5185  "} />,
    header: "Doświadczenie",
    text:
      "Plans that are designed to help you fall in love with fitness and get the results you want.",
  },
  {
    icon: <PersonFill color={"#fc5185  "} />,
    header: "Indywidualne podejście",
    text:
      "Plans that are designed to help you fall in love with fitness and get the results you want.",
  },
  {
    icon: <Trophy color={"#fc5185  "} />,
    header: "Doświadczenie",
    text:
      "Plans that are designed to help you fall in love with fitness and get the results you want.",
  },
];

const StyledIcon = styled.div`
  display: block;
  border-radius: 50%;
  min-width: 70px;
  height: 70px;
  padding: 5px;
  background-color: #f5f5f5;
  margin-right: 30px;
`;

const IconWraper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 10px;

  @media (min-width: 1024px) {
    min-width: 500px;
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;

  @media (min-width: 2560px) {
    line-height: 3rem;
  }
`;

const StyledHeader = styled.h3`
  margin: 10px 0;
  color: #364f6b;
`;

const BriefIcons = () => (
  <>
    {IconContent.map((item, index) => (
      <IconWraper key={index}>
        <StyledIcon>{item.icon}</StyledIcon>
        <ColumnWrap>
          <StyledHeader>{item.header}</StyledHeader>
          <p>{item.text}</p>
        </ColumnWrap>
      </IconWraper>
    ))}
  </>
);

export default BriefIcons;
