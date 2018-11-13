import React from "react";
import "./App.css";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <React.Fragment>
      <div className="left-content">
        <NavBar />{" "}
      </div>
      <div className="right-content">
        <h1 className="page-banner">Come see my coding journey!</h1>{" "}
        <img classname="macbook-photo" src={require("./macbook-photo.jpeg")} />
      </div>
    </React.Fragment>
  );
};

export default App;
