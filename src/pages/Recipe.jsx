import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import "./recipe.css";

import React from "react";

export const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  //________LOOOOOP__________________________________________1______________________

  // if(details.meals[0].strIngredient1 !== "")
  //   {
  //     const ing1= details.meals[0].strIngredient1;
  //     console.log(ing1);
  //     return ing1;
  //   }

  //________LOOOOOP__________________________________________1______________________

  //________LOOOOOP__________________________________________2______________________

  let ingredientsArray = [];
  if ("meals" in details) {
    for (let i = 1; i <= 20; i++) {
      if (details.meals[0][`strIngredient${[i]}`]) {
        ingredientsArray.push({
          measure: details.meals[0][`strMeasure${[i]}`],
          ingredients: details.meals[0][`strIngredient${[i]}`],
        });
      } else {
        break;
      }
    }
  }
  console.log("ingredientsArray:", ingredientsArray);

  //________LOOOOOP__________________________________________2______________________
  return (
    <div className="card">
      {details.meals && (
        <div className="card-body">
          <img
            src={details.meals[0].strMealThumb}
            className="card-img-top"
            alt={details.meals[0].strMeal}
          />
          <h3 className="card-title">{details.meals[0].strMeal}</h3>
          <div className="card-text">Area: {details.meals[0].strArea}</div>
          <h3 className="card-text">Ingredients:</h3>
          {/* <div className="card-text">{ingredientsArray}</div> */}
          <h3>Instructions:</h3>
          <div className="card-text">{details.meals[0].strInstructions}</div>

          <div className="d-flex justify-content-between">
            <button className="recipeButton" onClick={handleClick}>
              Back to Main
            </button>
            <button className="recipeButton">Infinity</button>
          </div>
        </div>
      )}
    </div>
  );
};
