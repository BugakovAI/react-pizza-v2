import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard';
import pizzasArr from '../assets/pizzas.json';

function PizzaList() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63cbfac45c6f2e1d84bf4140.mockapi.io/Items')
      .then((response) => response.json())
      .then((itemsFromResponse) => setItems(itemsFromResponse));
  }, []);

  return pizzasArr.map((el, i) => {
    return <PizzaCard {...el} key={el.id} />;
  });
}

export default PizzaList;
