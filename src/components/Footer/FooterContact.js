import React from "react";
import styled from "styled-components";

const Wraper = styled.div``;

const Styledh2 = styled.h2`
  font-weight: 400;
  margin-bottom: 30px;
`;

const Styledh3 = styled.h3`
  font-weight: 300;
  margin-top: 15px;
  color: #f0a500;
`;

const StyledP = styled.p`
  margin-top: 5px;
`;

const FooterContact = () => (
  <Wraper>
    <Styledh2>Masz pytania?</Styledh2>
    <Styledh3>Numer telefonu</Styledh3>
    <StyledP>727-759-421</StyledP>
    <Styledh3>E-mail</Styledh3>
    <StyledP>mdzugan98@gmail.com</StyledP>
  </Wraper>
);

export default FooterContact;
