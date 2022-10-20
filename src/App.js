import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Recipes } from "./components/Recipes";
import { Search } from "./components/Search";
import Pages from "./pages/Pages";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Pages />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
