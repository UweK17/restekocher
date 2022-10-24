import { TbMeat } from "react-icons/tb";
import {
  GiCroissant,
  GiShrimp,
  GiChickenOven,
  GiCupcake,
  GiCheeseWedge,
} from "react-icons/gi";
import { IoLeaf } from "react-icons/io5";
// import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import "../category.css";

export const Category = () => {
  return (
    <div className="icons">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={"/cuisine/Breakfast"}
      >
        <GiCroissant />
        <h4>Breakfast</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Beef"}>
        <TbMeat />
        <h4>Beef</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Chicken"}>
        <GiChickenOven />
        <h4>Chicken</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Seafood"}>
        <GiShrimp />
        <h4>Seafood</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Vegetarian"}>
        <GiCheeseWedge />
        <h4>Vegetarian</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Vegan"}>
        <IoLeaf />
        <h4>Vegan</h4>
      </NavLink>
      <NavLink className="icon" to={"/cuisine/Dessert"}>
        <GiCupcake />
        <h4>Dessert</h4>
      </NavLink>
    </div>
  );
};

// const List = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0rem;
// `;
// const SLink = styled(NavLink)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   margin-right: 1rem;
//   text-decoration: none;
//   background: linear-gradient(35deg, #494949, #313131);
//   width: 4.7rem;
//   height: 4.7rem;
//   cursor: pointer;

//   h4 {
//     color: white;
//     font-size: 0.8rem;
//   }
//   svg {
//     color: white;
//     font-size: 2rem;
//   }
//   &.active {
//     background: linear-gradient(to right, #f27121, #e94057);
//     svg {
//       color: white;
//     }
//     h4 {
//       color: white;
//     }
//   }
// `;
