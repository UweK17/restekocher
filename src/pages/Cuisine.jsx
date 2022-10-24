import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export const Cuisine = () => {
  const [cuisine, setCuisine] = useState({});
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    console.log("data:", data);
    const recipes = await data.json();
    console.log("recipes:", recipes);
    setCuisine(recipes);
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.meals && cuisine.meals.map((item) => {
        return (
          <Card key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.idMeal} />
            <h4>{item.strMeal}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
