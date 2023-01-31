import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, changeName } from '../../redux/slices/FilterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();

  function changeCounterName() {
    dispatch(changeName());
  }

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{name}</span>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={changeCounterName}>
          Ахахах
        </button>
      </div>
    </div>
  );
}
