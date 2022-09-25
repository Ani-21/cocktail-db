import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Category() {
  const [selectCategory, setSelectedCategory] = useState([]);
  let { category } = useParams();

  const getCategory = async (name) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`
      );
      const data = await res.json();
      const { drinks } = data;
      setSelectedCategory(drinks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory(category);
  }, [category]);

  return (
    <Grid>
      {selectCategory.map((item) => {
        return (
          <Link to={"/recipe/" + item.idDrink}>
            <Card key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h4>{item.strDrink}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Category;
