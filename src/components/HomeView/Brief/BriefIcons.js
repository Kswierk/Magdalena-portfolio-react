import React from "react";

import styled from "styled-components";
import { Trophy } from "@styled-icons/boxicons-regular/Trophy";
import { PersonOutline } from "@styled-icons/evaicons-outline/PersonOutline";
import { Medal } from "@styled-icons/boxicons-regular/Medal";

const IconContent = [
  {
    icon: <Trophy color={"#f0a500  "} />,
    header: "Doświadczenie",
    text:
      "Wykonaliśmy ponad 3000 treningów personalnych z klientami, którzy razem z nami osiągneli swoje cele.",
  },
  {
    icon: <PersonOutline color={"#f0a500  "} />,
    header: "Indywidualne podejście",
    text:
      "Zdajemy sobie sprawę, że każdy z Was ma inne potrzeby. Dlatego aby uzyskać jak najlepsze efekty, skupiamy się na optymalizacji treningu pod daną osobę.",
  },
  {
    icon: <Medal color={"#f0a500  "} />,
    header: "Motywacja",
    text:
      "Nasi trenerzy zadbają o to, aby podczas treningu nie zabrakło Ci dużej dawki motywacji i dobrej zabawy",
  },
];

const StyledIcon = styled.div`
  display: block;
  border-radius: 50%;
  min-width: 70px;
  height: 70px;
  padding: 5px;
  background-color: #f4f4f4;
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
