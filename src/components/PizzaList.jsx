import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import PizzaCardSkeleton from './PizzaCard/PizzaCardSkeleton';
// import pizzasArr from '../assets/pizzas.json';

function PizzaList() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63cbfac45c6f2e1d84bf4140.mockapi.io/Items')
      .then((response) => response.json())
      .then((itemsFromResponse) => {
        setTimeout(() => {
          setItems(itemsFromResponse);
          setIsLoading(false);
        }, 1000);
      });
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading
        ? [...new Array(8)].map((el, i) => <PizzaCardSkeleton key={i} />)
        : items.map((el) => <PizzaCard {...el} key={el.id} />)}
    </>
  );
}

export default PizzaList;
