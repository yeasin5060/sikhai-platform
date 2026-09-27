import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import learnerReducer from './slices/learnerSlice';
import courseReducer from './slices/courseSlice';
import classReducer from './slices/classSlice';
import communityReducer from './slices/communitySlice';
import analyticsReducer from './slices/analyticsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    learners: learnerReducer,
    courses: courseReducer,
    classes: classReducer,
    community: communityReducer,
    analytics: analyticsReducer,
  },
});

export default store;
