import React from "React";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.buttons.colors.primaryBg};
  color: ${(props) => props.theme.buttons.colors.primary};
  min-width: 100px;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.buttons.colors.border};
  white-space: nowrap;
  border-radius: 2px;
`;

export default ({ children }) => {
  return <Button type="button">{children}</Button>;
};
