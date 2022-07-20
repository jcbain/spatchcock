import styled from "styled-components";

// Extras
import devices from "../../styles/breakpoints";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 2px ${(props) => props.theme.header.colors.bottomBorder} solid;
`;

export const Content = styled.section`
  max-width: ${(props) => props.theme.size.content.maxWidth};
  height: 100%;
  margin: 0px auto;
  padding: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  color: ${(props) => props.theme.header.colors.titleColor};
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  ${Content} & {
    flex-grow: 1;
  }

  @media ${devices.laptop} {
    justify-content: space-between;
  }
`;
