import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../slices/dataSlice'; // Import your slice reducer

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
