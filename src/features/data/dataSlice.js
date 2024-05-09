import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const dataSlice = createSlice({
  name: 'data', // Slice name
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions; // Export actions
export default dataSlice.reducer; // Export reducer