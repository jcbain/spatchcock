import React from "react";

// Components
import Title from "./Title";
import Search from "./Search";

// Styles
import { Header, Content } from "./index.styles";

export default () => {
  return (
    <Header>
      <Content>
        <Title />
        <Search />
      </Content>
    </Header>
  );
};
