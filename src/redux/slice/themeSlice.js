// src/reducers/themeSlice.js

import {createSlice} from '@reduxjs/toolkit';
import colors from '../../assets/colors';

// Define your light and dark themes

// Initial state
const initialState = {
  currentTheme: 'light', // Default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

// Selectors
export const selectCurrentTheme = state => state.theme.currentTheme;
export const selectTheme = state =>
  state.theme.currentTheme === 'dark' ? colors.darkTheme : colors.lightTheme;

export default themeSlice.reducer;
