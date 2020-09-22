import React from "react";
import styled from "styled-components";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const soclinks = [
  {
    name: "instagram",
    icon: <InstagramAlt color="#fc5185" />,
    url: "https://www.instagram.com/magdadzugan/",
  },
  {
    name: "facebook",
    icon: <FacebookSquare color="#fc5185" />,
    url: "https://www.facebook.com/madzia.dzugan",
  },
  {
    name: "linkedin",
    icon: <LinkedinSquare color="#fc5185" />,
    url: "https://www.facebook.com/madzia.dzugan",
  },
];

const IconWraper = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  padding: 3px;
  background-color: #f5f5f5;
  margin: 10px;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;

const Styledh2 = styled.h2`
  font-weight: 400;
`;

const FooterSocialLinks = () => (
  <>
    <StyledIcons>
      <Styledh2>Obserwuj mnie</Styledh2>
      <IconsContainer>
        {soclinks.map((item) => (
          <IconWraper key={item.name}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </IconWraper>
        ))}
      </IconsContainer>
    </StyledIcons>
  </>
);

export default FooterSocialLinks;
