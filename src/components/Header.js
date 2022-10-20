import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import logo from "../img/fridge-5930424_1920.png";

export const Header = () => {
  return (
    <header className="navbar navbar-light bg-light w-auto p-3">
      <a className="navbar-brand" href="https">
        <img src={logo} style={{ width: 70, height: 80 }} alt="logo" />
      </a>
      <h1>ResteKocher</h1>
      <div></div>
    </header>
  );
};
