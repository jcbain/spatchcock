import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 2px ${(props) => props.theme.header.colors.bottomBorder} solid;
`;

export const Content = styled.section`
  max-width: ${(props) => props.theme.size.content.maxWidth};
  height: 100%;
  margin: 0px auto;
  padding: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.header.colors.titleColor};
`;
