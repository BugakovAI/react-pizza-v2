import React, { useContext, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { SearchContext } from '../App';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import PizzaCard from './PizzaCard/PizzaCard';
import PizzaCardSkeleton from './PizzaCard/PizzaCardSkeleton';
import { setAllFilters } from '../redux/slices/FilterSlice';

function PizzaList({ currentPage }) {
  // const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const activeSort = useSelector((state) => state.filter.activeSort);

  const { searchText, isLoading, setIsLoading } = useContext(SearchContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const searchedPizzas = items.filter((el) => {
    return el.title.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    if (window.location.search) {
      const queryStringParsed = qs.parse(window.location.search.substring(1));
      dispatch(setAllFilters(queryStringParsed));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      setIsLoading(true);
      const sortType =
        activeSort === 0 ? 'rating' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : '';

      const url = `https://63cbfac45c6f2e1d84bf4140.mockapi.io/Items?page=${currentPage}&limit=4&sortBy=${sortType}
      ${activeCategory ? `&category=${activeCategory}` : ''}`;

      axios.get(url).then((itemsFromResponse) => {
        setItems(itemsFromResponse.data);
        setIsLoading(false);
      });
    }
    isSearch.current = false;
  }, [activeCategory, activeSort, currentPage, setIsLoading]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        activeCategory,
        activeSort,
        currentPage,
      });
      navigate('?' + queryString);
    }
    isMounted.current = true;
  }, [navigate, activeCategory, activeSort, currentPage]);

  return (
    <>
      {isLoading
        ? [...new Array(4)].map((el, i) => <PizzaCardSkeleton key={i} />)
        : searchedPizzas.map((el) => <PizzaCard {...el} key={el.id} />)}
    </>
  );
}

export default PizzaList;
