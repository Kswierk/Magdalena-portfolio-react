import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  margin: 0 10px;
  background-color: #fff;
  border: 2px solid lightgray;
  text-align: center;
  text-transform: uppercase;
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
  color: #f56a79;
  font-weight: 400;
`;

const ContactDetails = () => (
  <Wraper>
    <Header>Skontaktuj się z nami</Header>
    <TextHeader>Miasto</TextHeader>
    <p>Kraków</p>
    <TextHeader>Numer telefonu</TextHeader>
    <p>727-759-421</p>
    <TextHeader>E-mail</TextHeader>
    <Email>mdzugan98@gmail.com</Email>
  </Wraper>
);

export default ContactDetails;
