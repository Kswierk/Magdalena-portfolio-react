import React from "react";

import styled from "styled-components";
import { Trophy } from "@styled-icons/boxicons-regular/Trophy";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";

const IconContent = [
  {
    icon: <Trophy color={"#767c77"} />,
    header: "Doświadczenie",
    text:
      "Plans that are designed to help you fall in love with fitness and get the results you want.",
  },
  {
    icon: <PersonFill color={"#767c77"} />,
    header: "Indywidualne podejście",
    text:
      "Plans that are designed to help you fall in love with fitness and get the results you want.",
  },
  {
    icon: <Trophy color={"#767c77"} />,
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
  background-color: #fabea7;
  margin-right: 30px;
`;

const IconWraper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 10px;
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h3`
  margin: 10px 0;
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
