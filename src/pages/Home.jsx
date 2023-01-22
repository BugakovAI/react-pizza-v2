import React from 'react';
import { useEffect } from 'react';

import Categories from '../components/Categories';
import PizzaList from '../components/PizzaList';
import Sort from '../components/Sort';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaList />
      </div>
    </div>
  );
};

export default Home;
