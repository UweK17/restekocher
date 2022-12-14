import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export const Searched = () => {
  const [search, setSearched] = useState([]);
  let params = useParams();
  const getSearched = async (ingredient) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const recipes = await data.json();
    setSearched(recipes);
  };
  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched]);
  return (
    <Grid>
      {search.meals &&
        search.meals.map((item) => {
          return (
            <Card key={item.idMeal}>
              <Link to={"/recipe/" + item.idMeal}>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <h4>{item.strMeal}</h4>
              </Link>
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
