import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isDarkMode: getSystemDefaultMode() },
  reducers: {
    toggle(state) {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

const uiReducers = uiSlice.reducer;
const uiActions = uiSlice.actions;

export { uiActions, uiReducers };
