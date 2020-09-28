import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { menuItems } from "./menuItems";

const NavMenu = styled.ul`
  position: absolute;
  left: ${(props) => (props.alter ? "-100%" : "0")};
  top: 60px;
  width: 100%;
  background-color: #f5f5f5;
  transition: ${(props) => (props.alter ? "0" : "all .4s ease")};
  z-index: 100;

  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    left: 0;
    top: 0;
    position: relative;
  }
`;

const NavLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 15px 0;
  /* transition: 0.3s; */
  text-transform: uppercase;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 30px;
  }

  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 3px;
  transition: all ease 0.3s;
  color: #f12b6b;

  &.active {
    color: green;
  }
`;

const NavBurger = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4vw;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavBurgerLine = styled.div`
  height: 3px;
  width: 28px;
  margin: 5px;
  background-color: #fc5185;
  transition: 0.3s;

  :nth-of-type(1) {
    transform: ${(props) =>
      props.alter ? "rotate(-45deg) translate(-5px, 1px)" : "null"};
  }

  :nth-of-type(2) {
    display: ${(props) => (props.alter ? "none" : "block")};
  }

  :nth-of-type(3) {
    transform: ${(props) =>
      props.alter ? "rotate(45deg) translate(-5px, -1px)" : "null"};
  }
`;

class MenuItem extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <NavBurger onClick={this.handleClick}>
          {this.state.clicked ? (
            <>
              <NavBurgerLine alter />
              <NavBurgerLine alter />
              <NavBurgerLine alter />
            </>
          ) : (
            <>
              <NavBurgerLine />
              <NavBurgerLine />
              <NavBurgerLine />
            </>
          )}
        </NavBurger>
        {this.state.clicked ? (
          <NavMenu onClick={this.handleClick}>
            <StyledLink exact to="/">
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
          </NavMenu>
        ) : (
          <NavMenu alter>
            <StyledLink exact to="/">
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
          </NavMenu>
        )}
      </>
    );
  }
}

export default MenuItem;
