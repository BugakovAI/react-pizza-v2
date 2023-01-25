// import React, { useState } from 'react';

function Categories({ changeCategory, active }) {
  const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const setActiveClass = (index) => {
    return active === index ? 'active' : '';
  };

  const categoriesList = categoriesArr.map((el, i) => {
    return (
      <li className={setActiveClass(i)} onClick={() => changeCategory(i)} key={i}>
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
