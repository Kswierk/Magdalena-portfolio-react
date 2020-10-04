import React from "react";
import styled from "styled-components";

const Wraper = styled.div``;

const Styledh2 = styled.h2`
  font-weight: 400;
  margin-bottom: 30px;
  padding-top: 30px;
`;

const Styledh3 = styled.h3`
  font-weight: 300;
  margin-top: 10px;
  color: #fc5185;
`;

const FooterContact = () => (
  <Wraper>
    <Styledh2>Masz pytania?</Styledh2>
    <Styledh3>Numer telefonu</Styledh3>
    <p>727-759-421</p>
    <Styledh3>E-mail</Styledh3>
    <p>mdzugan98@gmail.com</p>
  </Wraper>
);

export default FooterContact;
