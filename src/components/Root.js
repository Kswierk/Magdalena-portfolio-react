import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: none;
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
      <Footer />
    </Router>
  );
};

export default Root;
