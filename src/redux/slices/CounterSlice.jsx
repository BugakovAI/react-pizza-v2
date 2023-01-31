import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'щочик',
  value: 0,
};

export const myCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeName: (state, action) => {
      state.name = 'АЗазаза';
    },
  },
});

export const { increment, decrement, incrementByAmount, changeName } = myCounterSlice.actions;

export default myCounterSlice.reducer;
