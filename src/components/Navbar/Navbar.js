import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import logo from "../../assets/img/logo.jpg";
import styled from "styled-components";
import { Close } from "@styled-icons/material";
import { List } from "@styled-icons/bootstrap/List";

const NavbarItems = styled.nav`
  position: relative;
  background-color: #fabea7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media (min-width: 1200px) {
    /* height: 6vh; */
  }
`;

const NavImg = styled.img`
  height: 50px;
  margin: 0 80px 0 40px;
  cursor: pointer;
`;

const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  cursor: pointer;

  @media (min-width: 960px) {
    display: none;
  }
`;

const NavBurger = styled.div`
  display: block;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: ${(props) => (props.alt ? "100%" : "-15vh")};
  opacity: ${(props) => (props.alt ? "1" : "0")};
  transition: ${(props) => (props.alt ? "all .5s ease" : "0")};
  z-index: -1;
  background-color: #fabea7;

  @media (min-width: 960px) {
    position: relative;
    flex-direction: row;
    width: auto;
    top: 0;
    opacity: 1;
    transition: 0;
    z-index: 1;
    align-items: center;
  }
`;

const NavLi = styled.li`
  position: relative;
  margin-right: 40px;
  width: 100%;
  text-align: center;
  list-style: none;
`;

const NavA = styled.a`
  text-decoration: none;
  color: white;
  padding: 1.4em;
  width: 100%;
  display: table;
  :hover {
    background-color: #fbe2e5;
    color: #767c77;
    border-radius: 4px;
    transition: 0.3s;
  }

  @media (min-width: 960px) {
    padding: 0;
    display: block;
    /* width: 25%; */

    :hover {
      background-color: #fabea7;
    }
  }
`;

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <NavbarItems>
        <NavImg src={logo} />
        <NavIcon onClick={this.handleClick}>
          <NavBurger>
            {this.state.clicked ? (
              <Close size="38" color="white" />
            ) : (
              <List size="38" color="white" />
            )}
          </NavBurger>
        </NavIcon>
        {this.state.clicked ? (
          <NavMenu alt="true">
            {MenuItems.map((item, index) => {
              return (
                <NavLi key={index}>
                  <NavA className={item.cName} href={item.url}>
                    {item.title}
                  </NavA>
                </NavLi>
              );
            })}
          </NavMenu>
        ) : (
          <NavMenu>
            {MenuItems.map((item, index) => {
              return (
                <NavLi key={index}>
                  <NavA className={item.cName} href={item.url}>
                    {item.title}
                  </NavA>
                </NavLi>
              );
            })}
          </NavMenu>
        )}
      </NavbarItems>
    );
  }
}

export default Navbar;
