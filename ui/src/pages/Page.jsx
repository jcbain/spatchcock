import React from "react";
import styled from "styled-components";
import { Content } from "../components/Header/index.styles";

const Article = styled.article`
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.size.content.maxWidth};
  margin: 0 auto;
`;

export default ({ children }) => {
  return (
    <Article>
      <ContentWrapper>{children}</ContentWrapper>
    </Article>
  );
};
