import React from "react";
import Alcoholic from "../components/Alcoholic";
import NonAlcoholic from "../components/NonAlcoholic";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Alcoholic />
      <NonAlcoholic />
    </div>
  );
}

export default Home;
