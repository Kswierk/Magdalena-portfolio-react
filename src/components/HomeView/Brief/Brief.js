import React from "react";

import SectionHeader from "../../SectionHeader/SectionHeader";
import BriefText from "./BriefText";
import BriefIcons from "./BriefIcons";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #fbe2e5;
`;

const Brief = () => {
  return (
    <StyledBackground>
      <SectionHeader textHeader={"czym się zajmuję"} />
      <BriefText />
      <BriefIcons />
    </StyledBackground>
  );
};

export default Brief;
