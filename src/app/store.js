import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../features/data/dataSlice'; // Import your slice reducer

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});
