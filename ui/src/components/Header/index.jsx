import React from "react";

// Components
import Title from "./Title";
import Search from "./Search";
import UserChip from "./UserChip";

// Styles
import { Header, Content, ButtonContainer } from "./index.styles";

export default () => {
  return (
    <Header>
      <Content>
        <Title />
        <ButtonContainer>
          <Search />
          <UserChip />
        </ButtonContainer>
      </Content>
    </Header>
  );
};
