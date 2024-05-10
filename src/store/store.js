import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice'; // Import your slice reducer

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
