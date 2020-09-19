import React from "react";
import styled from "styled-components";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const UserReview = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 220px;
  min-height: 280px;
  outline: none;
`;

const StarContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Star = styled(StarFill)`
  height: 20px;
  width: 20px;
  color: gold;
  margin: 8px 4px 12px 4px;
`;

const SliderCard = (props) => {
  return (
    <>
      <UserReview key={props.index}>
        <h4>{props.name}</h4>
        <StarContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarContainer>
        <p>{props.text}</p>
      </UserReview>
    </>
  );
};

export default SliderCard;
