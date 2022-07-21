import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  background-color: ${(props) => props.theme.buttons.colors.primaryBg};
  color: ${(props) => props.theme.buttons.colors.primary};
  min-width: 100px;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.buttons.colors.border};
  white-space: nowrap;
  border-radius: 2px;
  text-decoration: none;

  &:active,
  &:visited {
    text-decoration: none;
  }
`;

export default ({ children, ...rest }) => {
  return (
    <Button role="button" {...rest}>
      {children}
    </Button>
  );
};
