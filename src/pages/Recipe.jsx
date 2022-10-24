import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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

  let ingredientsArray = [];

  for (let i = 0; i <= 19; i++) {
    if (details.meals[i].strIngredient[i+1]) {
    ingredientsArray.push({ingredient: details.meals[i].strIngredient[i+1], measure: details.meals[i].strMeasure[i+1]});
    console.log(ingredientsArray);
    } else {
    break;
    }
    } 

  return (
    <div className="card">
      {details.meals && <div className="card-body">
      <img
        src={details.meals[0].strMealThumb}
        className="card-img-top"
        alt={details.meals[0].strMeal}
      />
      <h5 className="card-title">{details.meals[0].strMeal}</h5>
      <p className="card-text">{details.meals[0].strArea}</p>
      <p className="card-text">Ingredients:</p>
      <p className="card-text">{ingredientsArray}</p>
      <p className="card-text">{details.meals[0].strInstructions}</p>
      
      <a href="#" className="card-link">zurück zur Hauptseite</a>
      <a href="#" className="card-link">Another Link</a>
      </div>}
    </div>
    // <DetailWrapper>
    //   {details.meals && (
    //     <>
    //       <div>
    //         <h2>{details.meals[0].strMeal}</h2>
    //         <h3>{details.meals[0].strArea}</h3>
    //         <img
    //           src={details.meals[0].strMealThumb}
    //           alt={details.meals[0].strMeal}
    //         />
    //       </div>
    //       <Info>
    //         <ul></ul>
    //         <div>
    //           {details.meals[0].strInstructions}
    //           {/* <h3
    //           dangerouslySetInnerHTML={{ __html: details.strInstructions }}
    //         ></h3> */}
    //         </div>
    //       </Info>
    //     </>
    //   )}
    // </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Info = styled.div`
  margin-left: 10rem;
`;
