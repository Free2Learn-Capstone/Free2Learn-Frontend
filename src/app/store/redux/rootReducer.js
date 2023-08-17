import { combineReducers } from 'redux';
import createCourseReducer from '../../create-course/createCourseSlice';

const rootReducer = combineReducers({
  createCourse: createCourseReducer,
  // Add other reducers for different features here
});

export default rootReducer;
