import React from "react";
import styled from "styled-components";

const CardWraper = styled.div`
  background-color: #eee;
  text-align: center;
  border-radius: 10px;
  margin: 40px 40px 80px 40px;
  width: 300px;

  @media (min-width: 948px) {
    width: 350px;
  }
`;

const CardHeader = styled.h3`
  border-radius: 10px 10px 0 0;
  padding: 20px;
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #fd94b4;
`;

const PriceTag = styled.p`
  font-size: 3rem;
  padding: 20px;
  background-color: #f6c7c7;
`;

const PriceIncludes = styled.p`
  padding: 10px;
  border-bottom: 1px solid lightgray;
  width: 80%;
  margin: 0 auto;
`;

const CardButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 30px;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #f12b6b;
  color: white;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
`;

const OfferCard = (props) => (
  <CardWraper>
    <CardHeader>{props.offer}</CardHeader>
    <PriceTag>{props.price}</PriceTag>
    <PriceIncludes>{props.trainings}</PriceIncludes>
    <PriceIncludes>{props.includes}</PriceIncludes>
    <PriceIncludes>konsultacja żywieniowa</PriceIncludes>
    <CardButton>zamów</CardButton>
  </CardWraper>
);

export default OfferCard;
