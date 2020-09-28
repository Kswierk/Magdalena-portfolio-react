import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  text-align: center;
  text-transform: uppercase;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    padding: 20px;
    margin: 0;
    margin-bottom: 0;
    width: auto;
  }
`;

const Header = styled.h3`
  margin: 20px 0;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TextHeader = styled.h4`
  color: #f56a79;
  margin: 10px auto;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Email = styled.p`
  margin-bottom: 15px;
`;

const Pargaraph = styled.p`
  margin-bottom: 35px;
`;

const ContactDetails = () => (
  <Wraper>
    <Header>Kontakt bezpośredni</Header>
    <TextHeader>Miasto</TextHeader>
    <Pargaraph>Kraków</Pargaraph>
    <TextHeader>Numer telefonu</TextHeader>
    <Pargaraph>727-759-421</Pargaraph>
    <TextHeader>E-mail</TextHeader>
    <Email>mdzugan98@gmail.com</Email>
  </Wraper>
);

export default ContactDetails;
