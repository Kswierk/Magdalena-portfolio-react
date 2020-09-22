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
  background-color: #f5f5f5;
  height: 80px;
  /* overflow-x: hidden; */
`;

const NavImg = styled.img`
  position: relative;
  top: 50%;
  transform: translatey(-50%);
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
