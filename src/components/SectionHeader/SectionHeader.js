import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  margin: 60px 40px 20px 40px;

  :after {
    content: "";
    height: 2px;
    border-radius: 4px;
    margin: 15px 0 50px 0;
    width: 100px;
    background: #f12b6b;
    display: block;
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
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
