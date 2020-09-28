import React from "react";

import styled from "styled-components";
import call from "../../../assets/img/call.png";
import note from "../../../assets/img/note.png";
import train from "../../../assets/img/train.png";

const IconContent = [
  {
    icon: call,
    header: "1. Chcemy Cie zrozumieć",
    text:
      "Każda współpraca rozpoczyna się od rozmowy. Chcemy zrozumieć Twoje potrzeby, to co cię motywuje i co chcesz osiągnąć. Dzięki tej wiedzy jesteśmy w stanie dostosować do Ciebie plan indywidualnego działania.",
  },
  {
    icon: note,
    header: "2. Trening wprowadzający",
    text:
      "Nasze pierwsze spotkanie rozpoczynamy od bezpłatnej sesji treningowej, na której przeprowadzamy testy funkcjonalne, na podstawie których możemy stwierdzić na jakich ćwiczeniach powinniśmy bazować, aby jak najszybciej osiągnąć Twój cel.",
  },
  {
    icon: train,
    header: "3. Działamy!",
    text:
      "Teraz już mamy wszystkie potrzebne informacje aby dopasować optymalny trening do twoich potrzeb. Od teraz wybrany trener będzie  do Twojej dypozycji. Do dzieła!",
  },
];

const StyledImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin-right: 40px;
  }
`;

const IconWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 30px;

  @media (min-width: 768px) {
    margin: 50px 80px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7rem;
`;

const StyledHeader = styled.h3`
  margin: 10px 0;
  font-size: 1.3rem;
  color: #364f6b;
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
