import React, { useState } from 'react';

function Categories() {
  const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);

  const setActiveClass = (index) => {
    return activeIndex === index ? 'active' : '';
  };

  const categoriesList = categoriesArr.map((el, i) => {
    return (
      <li className={setActiveClass(i)} onClick={() => setActiveIndex(i)} key={i}>
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
