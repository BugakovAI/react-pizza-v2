import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaList from '../components/PizzaList';
import Sort from '../components/Sort';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          active={activeCategory}
          changeCategory={(category) => setActiveCategory(category)}
        />
        <Sort active={activeSort} changeSort={(category) => setActiveSort(category)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaList activeCategory={activeCategory} activeSort={activeSort} />
      </div>
    </div>
  );
};

export default Home;
