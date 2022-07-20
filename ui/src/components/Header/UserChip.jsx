import React from "react";

// Components
import {
  Wrapper,
  Button,
  IconWrapper,
  Icon,
  AvatarWrapper,
  TextSpan,
} from "./UserChip.styles";

export default () => {
  return (
    <Wrapper>
      <Button type="button">
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <AvatarWrapper>
          <TextSpan>JB</TextSpan>
        </AvatarWrapper>
      </Button>
    </Wrapper>
  );
};
