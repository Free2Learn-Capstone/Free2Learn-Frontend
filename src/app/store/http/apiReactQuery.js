import { Queries, baseURL } from "@/app/helpers/enums";

export const createCourse = async (courseData) => {
  console.log(courseData, 'courseData')
  try {
    const response = await fetch(`${baseURL}/${Queries.CREATE_COURSES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error('Failed to create course');
    }

    const data = await response.json();
    console.log(data, '$$$$$$$data'); 
    return data;
  } catch (error) {
    console.log(error, '$$$$$$$error');
    throw new Error('Failed to create course');
  }
};

export const getCourses = async (_, { id }) => {
  const baseURL = "http://localhost:3100/api/v1/courses";
  const url = id ? `${baseURL}/get-course-by-id?id=${id}` : `${baseURL}/get-courses`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const { data = [] } = await response.json() || {};

    return data;
  } catch (error) {
    console.log(error, "$$$$$$$error");
    return Promise.reject(error?.message || "Failed to fetch courses");
  }
};