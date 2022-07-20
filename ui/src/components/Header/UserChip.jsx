import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/material-rounded";

// Extras
import devices from "../../styles/breakpoints";

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  height: 48px;
  border-radius: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  background-color: ${(props) => props.theme.header.colors.searchBg};

  @media ${devices.laptop} {
    border: 2px solid ${(props) => props.theme.header.colors.searchBorder};
  }
`;

const AvatarWrapper = styled.span`
  height: 34px;
  width: 34px;
  border-radius: 17px;
  background-color: ${(props) => props.theme.header.colors.chipAvatarBg};
  display: none;
  @media ${devices.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
`;

const TextSpan = styled.span`
  color: ${(props) => props.theme.header.colors.searchBg};
  font-size: 14px;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Menu)`
  color: ${(props) => props.theme.header.colors.chipHamburgerIcon};
  height: 38px;
  @media ${devices.laptop} {
    height: 26px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Button type="button">
        <AvatarWrapper>
          <TextSpan>JB</TextSpan>
        </AvatarWrapper>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </Button>
    </Wrapper>
  );
};
