import styled from "styled-components";
import { BreakfastDining } from "@styled-icons/material-rounded";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled(BreakfastDining)`
  color: ${(props) => props.theme.header.colors.logo};
  height: 24px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.header.colors.title};
  font-size: 24px;
  padding-left: 4px;
`;
