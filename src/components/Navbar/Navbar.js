import React from "react";
import logo from "../../assets/img/logo.svg";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const NavItems = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: #1a1c20;
  z-index: 300;
`;

const NavImg = styled.img`
  position: relative;
  margin-left: 5vw;
  height: 100%;
`;

const Navbar = () => {
  return (
    <NavItems>
      <Link to={"/"}>
        <NavImg alt="logo" src={logo} />
      </Link>
      <MenuItem />
    </NavItems>
  );
};

export default Navbar;
