import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    padding: 20px;
    margin-bottom: 0;
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
    <Header>Bądzmy w kontakcie</Header>
    <TextHeader>Miasto</TextHeader>
    <Pargaraph>Kraków</Pargaraph>
    <TextHeader>Numer telefonu</TextHeader>
    <Pargaraph>727-759-421</Pargaraph>
    <TextHeader>E-mail</TextHeader>
    <Email>mdzugan98@gmail.com</Email>
  </Wraper>
);

export default ContactDetails;
