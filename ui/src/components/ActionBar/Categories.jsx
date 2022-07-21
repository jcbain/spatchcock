import React from "react";
import {
  Kitchen,
  LocalBar,
  Cake,
  RamenDining,
} from "@styled-icons/material-rounded";

// Components
import Category from "./Category";

// Styles
import { Wrapper } from "./Categories.styles";

// TODO: move somewhere more appropriate
const icons = [
  { id: 1, icon: <RamenDining />, name: "recipes", pathname: "/recipes" },
  { id: 2, icon: <Kitchen />, name: "refrigerator", pathname: "/refrigerator" },
  { id: 3, icon: <LocalBar />, name: "drinks", pathname: "/drinks" },
  { id: 4, icon: <Cake />, name: "baking", pathname: "/baking" },
];

const Categories = () => {
  const categories = icons.map((icon) => (
    <Category
      key={icon.id}
      icon={icon.icon}
      name={icon.name}
      pathname={icon.pathname}
    />
  ));

  return <Wrapper>{categories}</Wrapper>;
};

export default Categories;
