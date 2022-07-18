import { useEffect } from "react";
import React from "react";
import styled from "styled-components";
import axios from "axios";

const Header = styled.header`
  width: 100%;
  height: 40px;
  background-color: green;
`;

const App = () => {
  useEffect(() => {
    axios
      .get("/server/recipes")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <Header />
      <Header />
    </div>
  );
};

export default App;
