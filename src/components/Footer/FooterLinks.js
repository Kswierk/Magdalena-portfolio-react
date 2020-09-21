import React from "react";
import { menuItems } from "../Navbar/menuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLi = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px auto;
  transition: 0.3s;

  :hover {
    background-color: #fbe2e5;
    color: #767c77;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 30px;

    :hover {
      background-color: #fabea7;
      color: #767c77;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 3px;
  transition: all ease 0.3s;
`;

const FooterLinks = () => (
  <>
    <h2>Strony</h2>
    <StyledLink to="/">
      <NavLi>{menuItems[0]}</NavLi>
    </StyledLink>
    <StyledLink to="/about">
      <NavLi>{menuItems[1]}</NavLi>
    </StyledLink>
    <StyledLink to="/offer">
      <NavLi>{menuItems[2]}</NavLi>
    </StyledLink>
    <StyledLink to="/contact">
      <NavLi>{menuItems[3]}</NavLi>
    </StyledLink>
  </>
);

export default FooterLinks;
