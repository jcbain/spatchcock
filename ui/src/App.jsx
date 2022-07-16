import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 40px;
  background-color: pink;
`;
const App = () => {
  return (
    <div>
      <Header />
      <Header />
      <Header />
    </div>
  );
};

export default App;
