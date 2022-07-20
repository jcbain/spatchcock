import React from "react";
import styled from "styled-components";
import {
  Kitchen,
  LocalBar,
  Cake,
  RamenDining,
} from "@styled-icons/material-rounded";

// Components
import Category from "./Category";

const icons = [
  { id: 1, icon: <RamenDining />, name: "recipes" },
  { id: 2, icon: <Kitchen />, name: "refrigerator" },
  { id: 3, icon: <LocalBar />, name: "drinks" },
  { id: 4, icon: <Cake />, name: "baking" },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};
`;

const Categories = () => {
  const categories = icons.map((icon) => (
    <Category id={icon.id} icon={icon.icon} name={icon.name} />
  ));

  return <Wrapper>{categories}</Wrapper>;
};

export default Categories;
