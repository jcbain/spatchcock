import React from "react";

// Styles
import {
  Wrapper,
  Search,
  IconContainer,
  IconWrapper,
  Icon,
  Text,
  ButtonKeysContainer,
  ButtonKey,
} from "./Search.styles";

export default () => {
  return (
    <Wrapper>
      <Search type="button">
        <IconContainer>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Text>search</Text>
        </IconContainer>
        <ButtonKeysContainer>
          <ButtonKey>⌘</ButtonKey>
          <ButtonKey>K</ButtonKey>
        </ButtonKeysContainer>
      </Search>
    </Wrapper>
  );
};
