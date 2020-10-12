import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWraper = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
  width: 80%;
  @media (min-width: 950px) {
    width: 30%;
    /* margin: 20px; */
  }
`;

const CardHeader = styled.h3`
  border-radius: 10px 10px 0 0;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #f4f4f4;
  color: #1a1c20;
`;

const PriceComment = styled.p``;

const PriceTime = styled.p`
  margin-bottom: 20px;
`;

const PriceTag = styled.p`
  font-size: 3.5rem;
  padding-top: 40px;
  font-weight: 500;
`;

const PriceIncludes = styled.p`
  padding: 20px 10px;
  border-bottom: 1px solid #f0a500;
  width: 80%;
  margin: 0 auto;

  &:last-of-type {
    border: none;
  }
`;

const CardButton = styled.button`
  padding: 1rem 1.6rem;
  margin: 20px auto;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #f0a500;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const OfferCard = (props) => (
  <CardWraper>
    <CardHeader>{props.offer}</CardHeader>
    <PriceComment>{props.comment}</PriceComment>
    <PriceTag>{props.price}</PriceTag>
    <PriceTime>{props.monthly}</PriceTime>
    <PriceIncludes>{props.trainings}</PriceIncludes>
    <PriceIncludes>{props.includes}</PriceIncludes>
    <PriceIncludes>konsultacja żywieniowa</PriceIncludes>
    <Link to="/contact">
      <CardButton>wybierz</CardButton>
    </Link>
  </CardWraper>
);

export default OfferCard;
