import React from "react";
import styled from "styled-components";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const soclinks = [
  {
    name: "instagram",
    icon: <InstagramAlt />,
    url: "https://www.instagram.com/magdadzugan/",
  },
  {
    name: "facebook",
    icon: <FacebookSquare />,
    url: "https://www.facebook.com/madzia.dzugan",
  },
  {
    name: "linkedin",
    icon: <LinkedinSquare />,
    url: "https://www.facebook.com/madzia.dzugan",
  },
];

const IconWraper = styled.div`
  height: 45px;
  width: 45px;
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 3px;
  background-color: pink;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const FooterSocialLinks = () => (
  <>
    <StyledIcons>
      <h2>Obserwuj mnie</h2>
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
