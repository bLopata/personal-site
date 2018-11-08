import React from "react";
import "./App.css";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <p>Welcome to my site!!</p>
      </div>
    </React.Fragment>
  );
};

export default App;
