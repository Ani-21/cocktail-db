import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";
import Category from "./Category";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
