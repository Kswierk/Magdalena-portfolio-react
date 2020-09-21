import React from "react";
import styled from "styled-components";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

const FooterWraper = styled.div`
  background-color: #eee;
  text-transform: uppercase;
`;

const SocialWraper = styled.div`
  margin: 10px;
`;

const LinksWraper = styled.div`
  margin: 10px;
`;

const ContactWraper = styled.div`
  margin: 10px;
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
