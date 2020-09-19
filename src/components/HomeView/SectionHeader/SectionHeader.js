import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  margin: 60px 40px 20px 40px;

  :after {
    content: "";
    height: 3px;
    margin: 15px 0 50px 0;
    width: 100px;
    background: #fabea7;
    display: block;
  }
`;

const SectionHeader = (props) => {
  return (
    <>
      <StyledHeader>{props.textHeader}</StyledHeader>
    </>
  );
};

export default SectionHeader;
