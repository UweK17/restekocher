import { TbMeat } from "react-icons/tb";
import {
  GiCroissant,
  GiShrimp,
  GiChickenOven,
  GiCupcake,
  GiCheeseWedge,
} from "react-icons/gi";
import { IoLeaf } from "react-icons/io5";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Breakfast"}>
        <GiCroissant />
        <h4>Breakfast</h4>
      </SLink>
      <SLink to={"/cuisine/Beef"}>
        <TbMeat />
        <h4>Beef</h4>
      </SLink>
      <SLink to={"/cuisine/Chicken"}>
        <GiChickenOven />
        <h4>Chicken</h4>
      </SLink>
      <SLink to={"/cuisine/Seafood"}>
        <GiShrimp />
        <h4>Seafood</h4>
      </SLink>
      <SLink to={"/cuisine/Vegetarian"}>
        <GiCheeseWedge />
        <h4>Vegetarian</h4>
      </SLink>
      <SLink to={"/cuisine/Vegan"}>
        <IoLeaf />
        <h4>Vegan</h4>
      </SLink>
      <SLink to={"/cuisine/Dessert"}>
        <GiCupcake />
        <h4>Dessert</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4.7rem;
  height: 4.7rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
