import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaCocktail, FaBeer } from "react-icons/fa";
import { GiCutLemon } from "react-icons/gi";

function Category() {
  return (
    <List>
      <SLink to={"category/beer"}>
        <FaBeer />
        <h4>Beer</h4>
      </SLink>
      <SLink to={"category/cocktail"}>
        <FaCocktail />
        <h4>Cocktail</h4>
      </SLink>
      <SLink to={"category/shake"}>
        <GiCutLemon />
        <h4>Shake</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
