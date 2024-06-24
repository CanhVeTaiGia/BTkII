import { createSlice } from '@reduxjs/toolkit';
import { ThemeInterface } from '../../interface/interface';

const initialState: ThemeInterface = {
  value: 'light',
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeReducer.actions;
export default themeReducer.reducer;
