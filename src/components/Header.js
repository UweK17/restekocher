import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import logo from "../img/fridge-5930424_1920.png";

export const Header = () => {
  return (
    <header className="navbar navbar-light bg-light w-auto p-3 text-center d-flex justify-content-around">
      <a className="navbar-brand" href="/">
        <img src={logo} style={{ width: 70, height: 80 }} alt="logo" />
      </a>
      <h1>Willkommen beim ResteKocher</h1>

      <div></div>
    </header>
  );
};
