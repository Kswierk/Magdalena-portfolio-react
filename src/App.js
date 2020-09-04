import React from "react";
import "./App.scss";
import Navbar from "../src/components/Navbar/Navbar";
import { createGlobalStyle } from "styled-components";

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}

export default App;
