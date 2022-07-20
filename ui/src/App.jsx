import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// Components

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Baking from "./pages/Baking";
import Create from "./pages/Create";
import Refrigerator from "./pages/Recipes";
import Recipes from "./pages/Recipes";

const App = () => {
  useEffect(() => {
    axios
      .get("/server/recipes")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="home" element={<Baking />} />
        <Route path="recipes" element={<Home />} />
        <Route path="baking" element={<Baking />} />
        <Route path="create" element={<Create />} />
        <Route path="refrigerator" element={<Refrigerator />} />
      </Routes>
    </div>
  );
};

export default App;
