import React from "react";
import styled from "styled-components";

// Components
import Header from "../Header";
import ActionBar from "../ActionBar";

const Navigation = styled.nav`
  width: 100%;
  position: sticky;
  top: 0px;
`;

export default () => {
  return (
    <Navigation>
      <Header />
      <ActionBar />
    </Navigation>
  );
};
