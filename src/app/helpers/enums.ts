export const baseURL = 'http://localhost:3100/api/v1';

export const USER_TYPES = {
  STUDENT: "STUDENT",
  VOLUNTEER: "VOLUNTEER",
};

export enum CourseStatus {
  OPEN = 'OPEN',
  ON_GOING = 'ON_GOING',
  ON_HOLD = 'ON_HOLD',
  CANCELED = 'CANCELED',
  CLOSED = 'CLOSED',
  FINISHED = 'FINISHED',
}

export enum Queries {
  CREATE_USER= "users/create-user",
  CREATE_COURSES= "courses/create-course",
  GET_COURSES= "courses/get-courses",
  GET_COURSE= "courses/get-course",
};