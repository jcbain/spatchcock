import { useEffect } from "react";
import React from "react";
import axios from "axios";

// Components
import Header from "./components/Header";
import ActionBar from "./components/ActionBar";

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
      <ActionBar />
    </div>
  );
};

export default App;
