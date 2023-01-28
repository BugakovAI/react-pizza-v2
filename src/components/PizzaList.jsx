import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import PizzaCardSkeleton from './PizzaCard/PizzaCardSkeleton';
// import pizzasArr from '../assets/pizzas.json';

function PizzaList({ currentPage, searchText, activeCategory, activeSort }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const sortType =
    activeSort === 0 ? 'rating' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63cbfac45c6f2e1d84bf4140.mockapi.io/Items?page=${currentPage}&limit=4&sortBy=${sortType}
      ${activeCategory ? `&category=${activeCategory}` : ''}`,
    )
      .then((response) => response.json())
      .then((itemsFromResponse) => {
        setTimeout(() => {
          setItems(itemsFromResponse);
          setIsLoading(false);
          console.log(itemsFromResponse);
        }, 0);
      });
    // window.scrollTo(0, 0);
  }, [activeCategory, sortType, currentPage]);

  const searchedPizzas = items.filter((el) => {
    return el.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // console.log('Поиск:');
  // console.log(searchedPizzas);

  return (
    <>
      {isLoading
        ? [...new Array(4)].map((el, i) => <PizzaCardSkeleton key={i} />)
        : searchedPizzas.map((el) => <PizzaCard {...el} key={el.id} />)}
    </>
  );
}

export default PizzaList;
