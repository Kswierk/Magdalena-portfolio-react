import React, { useEffect } from "react";
import styled from "styled-components";
import OfferInfo from "../components/OfferView/OfferInfo/OfferInfo";
import OfferCard from "../components/OfferView/OfferInfo/OfferCard";
import Button from "../components/Button/Button";

const OfferWraper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const online = [
  {
    trainings: "stały kontakt",
    offer: "1 miesiąc",
    price: "149zł",
    includes: "indywidualny plan treningowy",
  },
  {
    trainings: "stały kontakt",
    offer: "3 miesiące",
    price: "399zł",
    includes: "indywidualny plan treningowy",
  },
];

const Offer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OfferWraper>
        <OfferInfo header="trening personalny" />
        <Button linkto="/contact" btntext="umów się na bezpłatne konsultacje" />
      </OfferWraper>
      <OfferWraper>
        <OfferInfo online header="opieka trenerska online" />
        <CardsWraper>
          {online.map((onlineCard) => (
            <OfferCard
              key={onlineCard.price}
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
