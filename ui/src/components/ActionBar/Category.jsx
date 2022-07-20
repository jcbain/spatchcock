import React from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { NavLink } from "react-router-dom";

const Wrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:active,
  &:visited {
    text-decoration: none;
  }
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

export default ({ icon, name, pathname }) => {
  return (
    <Wrapper to={pathname}>
      <IconWrapper>{icon}</IconWrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};
