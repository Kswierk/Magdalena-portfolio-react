import React from "react";
import logo from "../../assets/img/logo.jpg";
import styled from "styled-components";
import MenuItem from "./Menuitem";
import { Link } from "react-router-dom";

const NavItems = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fabea7;
  height: 45px;
  /* overflow-x: hidden; */
`;

const NavImg = styled.img`
  height: 100%;
  width: 180px;
  margin-left: 3vw;
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
