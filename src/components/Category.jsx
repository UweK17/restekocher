import { TbMeat } from "react-icons/tb";
import {
  GiCroissant,
  GiShrimp,
  GiChickenOven,
  GiCupcake,
  GiCheeseWedge,
} from "react-icons/gi";
import { IoLeaf } from "react-icons/io5";
import React from "react";
import { NavLink } from "react-router-dom";
import "../category.css";

export const Category = () => {
  return (
    <div className="icons">
      <NavLink className="icon" to={"/cuisine/Breakfast"}>
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
      <NavLink className="icon" to={"/cuisine/Vegitarian"}>
        <GiCheeseWedge />
        <h4>Veggi</h4>
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
