import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveSort } from '../redux/slices/FilterSlice';

function Sort() {
  const popupItems = ['популярности', 'цене', 'алфавиту'];

  const activeSort = useSelector((state) => state.filter.activeSort);
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const popupRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      // console.log(popupRef.current);
      // console.log(event.composedPath());
      // console.log(event.composedPath().includes(popupRef.current));
      // return event.composedPath().includes(popupRef);
    });

    return () => {
      // second;
    };
  }, []);

  // console.log(popupRef);

  return (
    <div className="sort">
      <div className="sort__label">
        <b>
          {/* <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg> */}
          Сортировка по:
        </b>
        <span onClick={() => setOpenPopup(!openPopup)}>{popupItems[activeSort]}</span>
      </div>
      {openPopup && (
        <div ref={popupRef} className="sort__popup">
          <ul>
            {popupItems.map((el, i) => {
              return (
                <li
                  key={i}
                  className={activeSort === i ? 'active' : ''}
                  onClick={() => {
                    dispatch(setActiveSort(i));
                    setOpenPopup(false);
                  }}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
