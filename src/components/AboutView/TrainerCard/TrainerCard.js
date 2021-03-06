import React from "react";
import styled from "styled-components";
import kacper from "../../../assets/img/kacper.jpg";
import madzia from "../../../assets/img/madzia.jpg";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";

const CardWraper = styled.div`
  margin: 0 5px 0 10px;
  background-color: white;

  @media (min-width: 768px) {
    min-width: 40vw;
  }

  @media (min-width: 1024px) {
    min-width: 30vw;
  }
`;

const MadziaImg = styled.div`
  background: url(${madzia}) no-repeat center -50px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 55vh;
`;
const KacperImg = styled.div`
  background: url(${kacper}) no-repeat center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-height: 65vh;
  min-height: 65vh;
`;

const TrainerName = styled.p`
  text-align: center;
  margin: 35px 0 10px 0;
  font-size: 1.5rem;
`;
const TrainerPosition = styled.p`
  text-align: center;
`;

const InstagramLinkWraper = styled.div`
  height: 45px;
  width: 45px;
  margin: 20px auto;
`;

const StyledLink = styled.a`
  color: #f0a500;
`;

const TrainerCard = (props) => (
  <CardWraper>
    {props.madzia ? <MadziaImg /> : <KacperImg />}
    <TrainerName>{props.name}</TrainerName>
    <TrainerPosition>{props.position}</TrainerPosition>
    <InstagramLinkWraper>
      <StyledLink
        href={"https://www.facebook.com/madzia.dzugan"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramAlt />
      </StyledLink>
    </InstagramLinkWraper>
  </CardWraper>
);

export default TrainerCard;
