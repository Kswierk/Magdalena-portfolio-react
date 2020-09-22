import React from "react";
import styled from "styled-components";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

const FooterWraper = styled.div`
  background-color: #364f6b;
  text-transform: uppercase;
  color: #f5f5f5;
  text-align: center;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const SocialWraper = styled.div`
  margin-top: 40px;
`;

const LinksWraper = styled.div`
  margin: 40px;
`;

const ContactWraper = styled.div``;

const Footer = () => (
  <FooterWraper>
    <ContactWraper>
      <FooterContact />
    </ContactWraper>
    <LinksWraper>
      <FooterLinks />
    </LinksWraper>
    <SocialWraper>
      <FooterSocialLinks />
    </SocialWraper>
  </FooterWraper>
);

export default Footer;
