import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import './recipe.css';

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
  const handleClick = () => 
  {
    navigate('/', {replace: true});
  };
//________LOOOOOP________________________________________________________________
 
// if(details.meals[0].strIngredient1 !== "")
//   {
//     const ing1= details.meals[0].strIngredient1;
//     console.log(ing1);
//     return ing1;
//   }

//________LOOOOOP________________________________________________________________

  return (
    <div className="card">
      {details.meals && <div className="card-body">
      <img
        src={details.meals[0].strMealThumb}
        className="card-img-top"
        alt={details.meals[0].strMeal}
      />
      <h3 className="card-title">{details.meals[0].strMeal}</h3>
      <div className="card-text">Area: {details.meals[0].strArea}</div>
      <h3 className="card-text">Ingredients:</h3>
      <h3>Instructions:</h3>
      <div className="card-text">{details.meals[0].strInstructions}</div>
      
      <div className="d-flex justify-content-between">
        <button className="recipeButton" onClick={handleClick}>Back to Main</button>
        <button className="recipeButton">Infinity</button>
      </div>
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

// const DetailWrapper = styled.div`
//   margin-top: 10rem;
//   margin-bottom: 5rem;
//   display: flex;
//   h2 {
//     margin-bottom: 2rem;
//   }
//   li {
//     font-size: 1.2rem;
//     line-height: 2.5rem;
//   }
//   ul {
//     margin-top: 2rem;
//   }
// `;
// const Info = styled.div`
//   margin-left: 10rem;
// `;