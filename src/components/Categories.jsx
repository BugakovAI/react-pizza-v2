// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/FilterSlice';

function Categories() {
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const dispatch = useDispatch();

  const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const categoriesList = categoriesArr.map((el, i) => {
    return (
      <li
        className={activeCategory === i ? 'active' : ''}
        onClick={() => dispatch(setActiveCategory(i))}
        key={i}>
        {el}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default Categories;
