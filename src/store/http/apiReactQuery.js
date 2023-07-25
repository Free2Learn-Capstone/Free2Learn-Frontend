import { Queries, baseURL } from "@/app/helpers/enums";
import axios from 'axios';


export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      `${baseURL}/${Queries.CREATE_USER}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = response.data;
    console.log(data, "$$$$$$$data");
    // Saving data to local storage
    localStorage.setItem("user", JSON.stringify(data));
     
    return data;
  } catch (error) {
    console.log(error, '$$$$$$$error');
    throw new Error('Failed to create course');
  }
};

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
export const getCourses = async (_, query) => {
  const { name = null } = query || {};
  const url = name ? `${baseURL}/${Queries.GET_COURSE}?name=${name}` : `${baseURL}/${Queries.GET_COURSES}`;
  console.log(url)
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