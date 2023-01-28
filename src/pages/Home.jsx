import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaList from '../components/PizzaList';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination/Pagination';

const Home = ({ searchText }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // let currentPage;

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
        <PizzaList
          currentPage={currentPage}
          searchText={searchText}
          activeCategory={activeCategory}
          activeSort={activeSort}
        />
      </div>
      {/* <Paginate currentPage={currentPage} /> */}
      <Pagination onChangePage={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default Home;
