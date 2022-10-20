import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Recipes } from "./components/Recipes";
import { Search } from "./components/Search";
import "./App.css";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(result.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <Info />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
