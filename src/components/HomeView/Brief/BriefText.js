import React from "react";

import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 40px 15px;
  line-height: 1.7rem;

  @media (min-width: 2560px) {
    line-height: 3rem;
  }
`;

const BriefContent = [
  {
    text:
      "Wiemy, że jesteś zajęty. Dlatego chcemy ułatwić Ci proces poszukiwania skutecznego trenera personalnego. Naszym celem jest uzyskanie przez Ciebie jak najlepszych rezultatów i wyników treningowych, które przełożą się na Twoje zdrowie, samopoczucie i pewność siebie",
  },
  {
    text:
      "Zastanawiasz się który trener będzie dla Ciebie odpowiedni? Napisz do nas coś o sobie i o swoich celach treningowych, a pomoże Ci trener o dopasowanej do Twoich potrzeb specjalizacji  .",
  },
  {
    text:
      "Trenuj na siłowni, w domu, na świeżym powietrzu, a nawet w Twoim biurze. Trenuj na swoich zasadach, tak abyś już nigdy nie musiał pominąć żadnego treningu",
  },
];

const BriefParagraph = () => {
  return (
    <div>
      {BriefContent.map((item, index) => (
        <StyledParagraph key={index}>{item.text}</StyledParagraph>
      ))}
    </div>
  );
};

export default BriefParagraph;
