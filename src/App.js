import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <h1>Wow!</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
