import React from "react";

import SectionHeader from "../../SectionHeader/SectionHeader";
import BriefText from "./BriefText";
import BriefIcons from "./BriefIcons";
import styled from "styled-components";

const StyledBackground = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 10px 10px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const ColumnWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Brief = () => {
  return (
    <>
      <SectionHeader textHeader={"czym się zajmujemy"} />
      <StyledBackground>
        <BriefText />
        <ColumnWraper>
          <BriefIcons />
        </ColumnWraper>
      </StyledBackground>
    </>
  );
};

export default Brief;
