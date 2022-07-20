import styled from "styled-components";
import { BreakfastDining } from "@styled-icons/material-rounded";

// Style Components
import { Content } from "./index.styles";

// Extras
import devices from "../../styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};

  ${Content} & {
    flex-grow: 1;
  }
`;

export const Logo = styled(BreakfastDining)`
  color: ${(props) => props.theme.header.colors.logo};
  height: 36px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.header.colors.title};
  font-size: 24px;
  @media ${devices.tablet} {
    display: block;
    padding-left: 4px;
  }
`;
