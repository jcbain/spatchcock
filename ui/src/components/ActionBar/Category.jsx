import React from "react";

// Styles
import { Wrapper, IconWrapper, Name } from "./Category.styles";
export default ({ icon, name, pathname }) => {
  return (
    <Wrapper to={pathname}>
      <IconWrapper>{icon}</IconWrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};
