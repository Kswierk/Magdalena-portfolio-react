import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import OfferText from "./OfferText";

const OfferInfo = (props) => (
  <>
    <SectionHeader textHeader={props.header} />
    <OfferText online={props.online} />
  </>
);

export default OfferInfo;
