import React, { useEffect } from "react";
import styled from "styled-components";
import OfferInfo from "../components/OfferView/OfferInfo/OfferInfo";
import OfferCard from "../components/OfferView/OfferInfo/OfferCard";
// import Button from "../components/Button/Button";

const OfferWraper = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  /* background-color: #f4f4f4; */
  background-color: #f0a500;
  color: white;
  display: block;
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  text-transform: uppercase;
  font-weight: 500;
  z-index: 50;
`;

const CardsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const online = [
  {
    trainings: "stały kontakt z trenerem",
    offer: "pakiet 1 miesiąc",
    price: "200 PLN",
    includes: "indywidualny plan treningowy",
    comment: "współpracy online",
    monthly: "miesięcznie",
  },
  {
    trainings: "stały kontakt z trenerem",
    offer: "pakiet 3 miesiące",
    price: "500 PLN",
    includes: "indywidualny plan treningowy",
    comment: "współpracy online",
    monthly: "oszczędzasz 100 PLN",
  },
  {
    trainings: "stały kontakt z trenerem",
    offer: "pakiet 6 miesięcy",
    price: "950 PLN",
    includes: "indywidualny plan treningowy",
    comment: "współpracy online",
    monthly: "oszczędzasz 250 PLN",
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
        <Button linkto="/contact">umów się na bezpłatne konsultacje</Button>
        {/* </OfferWraper>
      <OfferWraper> */}
        <OfferInfo online header="opieka trenerska online" />
        <CardsWraper>
          {online.map((onlineCard) => (
            <OfferCard
              key={onlineCard.price}
              comment={onlineCard.comment}
              trainings={onlineCard.trainings}
              offer={onlineCard.offer}
              price={onlineCard.price}
              includes={onlineCard.includes}
              monthly={onlineCard.monthly}
            />
          ))}
        </CardsWraper>
      </OfferWraper>
    </>
  );
};

export default Offer;
