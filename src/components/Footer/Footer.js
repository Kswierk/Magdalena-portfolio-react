import React from "react";
import styled from "styled-components";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

const FooterWraper = styled.div`
  background-color: #1a1c20;
  text-transform: uppercase;
  color: #f4f4f4;
  text-align: center;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const SocialWraper = styled.div`
  margin-top: 40px;
`;

const LinksWraper = styled.div`
  margin: 40px;
`;

const ContactWraper = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  @media (min-width: 1024px) {
    padding-top: 0;
  }
`;

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
