import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin: 80px 40px;

  &:after {
    content: "";
    display: block;
    margin: 10px auto;
    height: 5px;
    width: 50%;
    border-bottom: 2px solid #f0a500;
  }

  @media (min-width: 500px) {
    &:after {
      display: none;
    }
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const StyledSpan = styled.span`
  @media (min-width: 500px) {
    display: inline-block;
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      height: 5px;
      border-bottom: 2px solid #f0a500;
      border-radius: 2px;
      top: 50%;
      transform: translateY(-50%);
      width: 70px;
    }

    &:after {
      left: 100%;
      margin-left: 15px;
    }

    &:before {
      right: 100%;
      margin-right: 15px;
    }
  }
`;

const SectionHeader = (props) => {
  return (
    <>
      <StyledHeader>
        <StyledSpan>{props.textHeader}</StyledSpan>
      </StyledHeader>
    </>
  );
};

export default SectionHeader;
