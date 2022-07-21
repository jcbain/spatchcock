import React from "react";

// Components
import PrimaryButton from "../Buttons/NavButton";
import Categories from "./Categories";

// Styles
import { Wrapper, Content, ButtonWrapper } from "./index.styles";

export default () => {
  return (
    <Wrapper>
      <Content>
        <Categories />
        <ButtonWrapper>
          <PrimaryButton to="/create">Add Recipe</PrimaryButton>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};
