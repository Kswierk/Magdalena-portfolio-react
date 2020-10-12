import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.5em;
  z-index: 5;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 8.5rem;
  }
`;

const Header = (props) => {
  return (
    <>
      <StyledHeader>{props.headerText}</StyledHeader>
    </>
  );
};

export default Header;
