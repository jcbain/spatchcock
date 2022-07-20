import styled from "styled-components";
import { Menu } from "@styled-icons/material-rounded";

// Extras
import devices from "../../styles/breakpoints";

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const Button = styled.button`
  border: none;
  height: 48px;
  border-radius: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};

  background-color: ${(props) => props.theme.header.colors.searchBg};
  @media ${devices.laptop} {
    box-shadow: ${(props) => props.theme.shadows.mid};
    border: 1px solid ${(props) => props.theme.header.colors.searchBorder};
  }
`;

export const AvatarWrapper = styled.span`
  background-color: ${(props) => props.theme.header.colors.chipAvatarBg};
  display: none;
  @media ${devices.laptop} {
    height: 28px;
    width: 28px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
  }
`;

export const TextSpan = styled.span`
  color: ${(props) => props.theme.header.colors.searchBg};
  font-size: 14px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Menu)`
  color: ${(props) => props.theme.header.colors.chipHamburgerIcon};
  height: 38px;
  @media ${devices.laptop} {
    height: 22px;
  }
`;
