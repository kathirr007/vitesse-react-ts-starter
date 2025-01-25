import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = initialState.count;
    }
  }
});

const counterReducers = counterSlice.reducer;
const counterActions = counterSlice.actions;

export { counterActions, counterReducers };
