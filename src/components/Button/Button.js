import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StandardBtn = styled.button`
  position: relative;
  background-color: #f12b6b;
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

  @media (min-width: 1024px) {
    padding: 1.5rem 2.5rem;
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
