import React from "react";
import { menuItems } from "../Navbar/menuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 5px auto;
  transition: 0.3s;
  color: #f5f5f5;
  margin: 10px auto;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 3px;
  transition: all ease 0.3s;
`;

const Styledh2 = styled.h2`
  font-weight: 400;
  margin-bottom: 30px;
`;

const FooterLinks = () => (
  <>
    <Styledh2>Na skróty</Styledh2>
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
