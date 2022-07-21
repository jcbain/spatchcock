import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// Components

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Baking from "./pages/Baking";
import Create from "./pages/Create";
import Refrigerator from "./pages/Refrigerator";
import Recipes from "./pages/Recipes";
import Drinks from "./pages/Drinks";

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
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="baking" element={<Baking />} />
        <Route path="create" element={<Create />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="refrigerator" element={<Refrigerator />} />
      </Routes>
    </div>
  );
};

export default App;
