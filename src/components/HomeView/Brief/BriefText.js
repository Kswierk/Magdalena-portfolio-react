import React from "react";

import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 30px 15px;
`;

const BriefContent = [
  {
    text:
      "We know you’re busy. That’s why we take the hassle out of finding a personal trainer. Our focus is to get you going so that you can get the results that will leave you happier, more confident and able to get on with living your best life.",
  },
  {
    text:
      "Our job is to match you with one of our carefully selected experts by taking the time to listen to you at the start of your journey. Our trainers will then show how you how to train YOUR body because we believe fitness is not a one size fits all policy.",
  },
  {
    text:
      "Train at home, train outdoors, we can even come to your office. Train on your terms so that you never skip a workout again.",
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
