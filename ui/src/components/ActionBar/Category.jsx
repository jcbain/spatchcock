import React from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  ${StyledIconBase} {
    color: ${(props) => props.theme.actionBar.colors.categoryIcon};
    height: 20px;
  }
`;

const Name = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.actionBar.colors.categoryName};
`;

export default ({ icon, name }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};
