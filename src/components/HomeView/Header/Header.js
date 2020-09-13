import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: white;
  font-weight: 300;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>Zbuduj swoją wymarzoną sylwetkę</StyledHeader>
    </>
  );
};

export default Header;
