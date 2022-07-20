import React from "react";
import styled from "styled-components";

// Components
import PrimaryButton from "../Buttons/Primary";
import Categories from "./Categories";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const Content = styled.section`
  max-width: ${(props) => props.theme.size.content.maxWidth};
  height: 100%;
  margin: 0px auto;
  padding: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  color: ${(props) => props.theme.header.colors.titleColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};
  margin-left: 50px;
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
