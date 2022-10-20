import React from "react";

export const Recipes = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      <h1>Rezepte</h1>
    </section>
  );
};
