// project imports
import config from 'config';

import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

export const todoSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    menuOpen: (state, payload) => {
      const id = payload.payload.id;
      state.isOpen = [id];
      // state.opened = true;
    },
    setMenu: (state, payload) => {
      state.opened = !state.opened;
    },
  },
});

export const { menuOpen, setMenu } = todoSlice.actions;
export default todoSlice.reducer;
