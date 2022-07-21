import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px ${(props) => props.theme.size.wrapper.paddingH};
`;
