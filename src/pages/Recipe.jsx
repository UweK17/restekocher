import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

export const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}/information`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.strMeal}</h2>
        <h3>{details.strArea}</h3>
        <img src={details.strMealThumb} alt={details.strMeal} />
      </div>
      <Info>
        <ul></ul>
        <div>
          <h3
            dangerouslySetInnerHTML={{ __html: details.strInstructions }}
          ></h3>
        </div>
      </Info>
    </DetailWrapper>
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