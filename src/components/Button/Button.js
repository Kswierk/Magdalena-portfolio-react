import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StandardBtn = styled.button`
  position: relative;
  /* background-color: #f4f4f4; */
  background: transparent;
  border: 1px solid white;
  color: white;
  display: block;
  outline: none;
  /* border: none; */
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  text-transform: uppercase;
  font-weight: 500;
  z-index: 50;
  margin: 4rem;

  @media (min-width: 1024px) {
    padding: 1.2rem 2.2rem;
    font-size: 0.9rem;
  }
  @media (min-width: 2560px) {
    padding: 2.5rem 4.5rem;
    font-size: 1.4rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 3px;
  transition: all ease 0.3s;
`;

const Button = (props) => {
  return (
    <div>
      <StyledLink to={props.linkto}>
        <StandardBtn>{props.btntext}</StandardBtn>
      </StyledLink>
    </div>
  );
};

export default Button;
