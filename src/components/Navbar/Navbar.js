import React from "react";
import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const NavItems = styled.nav`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #1a1c20;
`;

const NavImg = styled.img`
  position: relative;
  height: 60px;
  margin-left: 5vw;
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
