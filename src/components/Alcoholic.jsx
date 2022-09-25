import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Alcoholic() {
  const [alco, setAlco] = useState([]);
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

  useEffect(() => {
    getAlcoDrinks();
  }, []);
  const getAlcoDrinks = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { drinks } = data;
      setAlco(drinks);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Alcoholic drinks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            paginations: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {alco.map((item) => {
            return (
              <SplideSlide key={item.idDrink}>
                <Link to={"/recipe/" + item.idDrink}>
                  <Card>
                    <p>{item.strDrink}</p>
                    <img src={item.strDrinkThumb} alt={item.strDrink} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Alcoholic;
