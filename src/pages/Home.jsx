import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import PizzaList from '../components/PizzaList';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination/Pagination';
import { setCurrentPage } from '../redux/slices/FilterSlice';

const Home = ({ searchText }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const onChangePage = (pageNumber) => dispatch(setCurrentPage(pageNumber));
  const currentPage = useSelector((state) => state.filter.currentPage);

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
        <PizzaList currentPage={currentPage} />
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
