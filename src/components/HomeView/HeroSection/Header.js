import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: white;
  text-transform: uppercase;
  line-height: 1.5em;
  z-index: 5;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
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
