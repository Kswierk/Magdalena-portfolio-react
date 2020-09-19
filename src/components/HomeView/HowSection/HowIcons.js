import React from "react";

import styled from "styled-components";
import call from "../../../assets/img/call.png";
import note from "../../../assets/img/note.png";
import train from "../../../assets/img/train.png";

const IconContent = [
  {
    icon: call,
    header: "1. Chcę Cie zrozumieć",
    text:
      "Każda współpraca rozpoczyna się od rozmowy. Chcę zrozumieć Twoje potrzeby, to co cię motywuje i co chcesz osiągnąć.",
  },
  {
    icon: note,
    header: "2. Trening wprowadzający",
    text:
      "Nasze pierwsze spotkanie rozpoczynamy od bezpłatnej sesji treningowej, na której przeprowadzę testy funkcjonalne oraz rozgrzewkę przed Twoją przygodą z treningiem.",
  },
  {
    icon: train,
    header: "3. Działamy!",
    text:
      "Teraz już mam wszystkie potrzebne informacje aby dopasować optymalny trening do twoich potrzeb. Do dzieła!",
  },
];

const StyledImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid gray;
`;

const IconWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10px;
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h3`
  margin: 10px 0;
  font-size: 1.3rem;
`;

const HowIcons = () => (
  <>
    {IconContent.map((item, index) => (
      <IconWraper key={index}>
        <StyledImg src={item.icon} />
        <ColumnWrap>
          <StyledHeader>{item.header}</StyledHeader>
          <p>{item.text}</p>
        </ColumnWrap>
      </IconWraper>
    ))}
  </>
);

export default HowIcons;
