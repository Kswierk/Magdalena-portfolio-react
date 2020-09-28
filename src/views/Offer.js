import React from "react";
import styled from "styled-components";
import OfferInfo from "../components/OfferView/OfferInfo/OfferInfo";
import OfferCard from "../components/OfferView/OfferInfo/OfferCard";

const OfferWraper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CardsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const personal = [
  {
    trainings: "60 minut treningu",
    offer: "trening pojedynczy",
    price: "155zł",
    includes: "omówienie techniki ćwiczeń",
  },
  {
    trainings: "60 minut treningu",
    offer: "pakiet 4 ",
    price: "140zł",
    includes: "omówienie techniki ćwiczeń",
  },
  {
    trainings: "60 minut treningu",
    offer: "pakiet 8 ",
    price: "130zł",
    includes: "omówienie techniki ćwiczeń",
  },
  {
    trainings: "60 minut treningu",
    offer: "pakiet 12",
    price: "120zł",
    includes: "omówienie techniki ćwiczeń",
  },
];

const online = [
  {
    trainings: "ONLINE",
    offer: "trening pojedynczy",
    price: "155zł",
    includes: "omówienie techniki ćwiczeń",
  },
  {
    trainings: "ONLINE",
    offer: "pakiet 4 ",
    price: "140zł",
    includes: "omówienie techniki ćwiczeń",
  },
  {
    trainings: "ONLINE",
    offer: "pakiet 8 ",
    price: "130zł",
    includes: "omówienie techniki ćwiczeń",
  },
];

const Offer = () => {
  return (
    <>
      <OfferWraper>
        <OfferInfo header="trening personalny" />
        <CardsWraper>
          {personal.map((personalCard) => (
            <OfferCard
              trainings={personalCard.trainings}
              offer={personalCard.offer}
              price={personalCard.price}
              includes={personalCard.includes}
            />
          ))}
        </CardsWraper>
      </OfferWraper>
      <OfferWraper>
        <OfferInfo online header="opieka trenerska online" />
        <CardsWraper>
          {online.map((onlineCard) => (
            <OfferCard
              trainings={onlineCard.trainings}
              offer={onlineCard.offer}
              price={onlineCard.price}
              includes={onlineCard.includes}
            />
          ))}
        </CardsWraper>
      </OfferWraper>
    </>
  );
};

export default Offer;
