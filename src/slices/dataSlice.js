import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  interval: '1min'
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setStockInterval: (state, action) => {
      state.interval = action.payload;
    }
  },
});

export const { setData, setStockInterval } = dataSlice.actions;
export default dataSlice.reducer;