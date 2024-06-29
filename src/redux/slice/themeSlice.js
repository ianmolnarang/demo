import {createSlice} from '@reduxjs/toolkit';
import colors from '../../assets/colors';

const initialState = {
  currentTheme: 'light',
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

export const selectCurrentTheme = state => state.theme.currentTheme;
export const selectTheme = state =>
  state.theme.currentTheme === 'dark' ? colors.darkTheme : colors.lightTheme;

export default themeSlice.reducer;
