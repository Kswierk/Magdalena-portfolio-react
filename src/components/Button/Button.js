import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StandardBtn = styled.button`
  position: relative;
  background-color: #f56a79;
  color: white;
  display: block;
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  text-transform: uppercase;
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
