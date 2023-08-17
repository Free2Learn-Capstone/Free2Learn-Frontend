import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state here
};

const createCourseSlice = createSlice({
  name: 'createCourse',
  initialState,
  reducers: {
    // Define your actions and reducers here
  },
});

export const { actions } = createCourseSlice;
export default createCourseSlice.reducer;
