import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Recipes } from "./components/Recipes";
import { Search } from "./components/Search";
import Pages from "./pages/Pages";
import "./App.css";
import { Category } from "./components/Category";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Category />
        <Pages />
        <Recipes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
