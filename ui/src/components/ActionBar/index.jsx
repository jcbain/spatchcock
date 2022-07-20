import React from "react";
import styled from "styled-components";

// Components
import PrimaryButton from "../Buttons/Primary";
import Categories from "./Categories";

// Extras
import devices from "../../styles/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid
    ${(props) => props.theme.actionBar.colors.bottomBorder};
  box-shadow: ${(props) => props.theme.shadows.low};
  align-items: center;
`;

const Content = styled.section`
  max-width: ${(props) => props.theme.size.content.maxWidth};
  margin: 0px auto;
  padding: 4px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};

  @media ${devices.tablet} {
    margin-left: 50px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Content>
        <Categories />
        <ButtonWrapper>
          <PrimaryButton>Add Recipe</PrimaryButton>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};
