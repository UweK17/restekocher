import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Splide, SplideSlide } from "@splidejs/splide";
// import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { Recipe } from "../pages/Recipe";

export const Random = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const check = localStorage.getItem("random");
    if (check) {
      setRandom(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await api.json();

      localStorage.setItem("random", JSON.stringify(data.meals));
      setRandom(data.meals);
      console.log(data.meals);
    }
  };
  return (
    <div>
      {random.map((meal) => {
        return (
          <Wrapper key={meal.idMeal}>
            <h1>Recipe of the Day</h1>
            {random.map((meal) => {
              return (
                <Card>
                  <Link to={"/recipe/" + meal.idMeal}>
                    <p>{meal.strMeal}</p>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </Link>
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
  }
`;
