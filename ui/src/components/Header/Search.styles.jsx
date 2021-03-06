import styled from "styled-components";
import { Search as SearchIcon } from "@styled-icons/material-rounded";

// Extras
import devices from "../../styles/breakpoints";

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Search = styled.button`
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

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const Icon = styled(SearchIcon)`
  height: 20px;
  color: ${(props) => props.theme.header.colors.searchIcon};
`;

export const Text = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.header.colors.searchBorder};
  padding-left: 8px;
  display: none;

  @media ${devices.laptop} {
    display: block;
    padding-right: 8px;
  }
`;

export const IconWrapper = styled.span`
  height: 34px;
  width: 34px;
  border-radius: 17px;
  background-color: ${(props) => props.theme.header.colors.searchIconBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonKeysContainer = styled.span`
  display: none;
  @media ${devices.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const ButtonKey = styled.span`
  align-items: center;
  background: linear-gradient(
    -225deg,
    ${(props) => props.theme.header.colors.keyBg1},
    ${(props) => props.theme.header.colors.keyBg2}
  );
  border-radius: 3px;
  box-shadow: inset 0 -2px 0 0 ${(props) => props.theme.header.colors.keyBShadow1},
    inset 0 0 1px 1px ${(props) => props.theme.header.colors.keyBShadow2},
    0 1px 2px 1px ${(props) => props.theme.header.colors.keyBShadow3};
  color: ${(props) => props.theme.header.colors.keyColor};
  display: flex;
  height: 20px;
  justify-content: center;
  margin-right: 0.4em;
  padding-bottom: 2px;
  position: relative;
  top: -1px;
  width: 20px;
  font-size: 14px;
`;
