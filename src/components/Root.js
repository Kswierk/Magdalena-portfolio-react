import React from "react";
import Navbar from "./Navbar/Navbar";
import { createGlobalStyle } from "styled-components";
import About from "../views/About";
import Contact from "../views/Contact";
import Offer from "../views/Offer";
import Home from "../views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    *,
::before,
::after{
  font-family:'Montserrat', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  }
`;

const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/offer" component={Offer} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Root;
