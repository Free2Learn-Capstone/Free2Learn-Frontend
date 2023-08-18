"use client"
import React, { useState } from "react";
import "./volunteer.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Courses from "@components/Courses-section/Courses";

interface Course {
  id: string;
  title: string;
  description: string;
  image?: File;
}

const Volunteer: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({
    id: "",
    title: "",
    description: "",
    image: undefined,
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      title: event.target.value,
    }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      description: event.target.value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;

    if (
      inputElement.files &&
      inputElement.files.length > 0 &&
      inputElement.files[0]
    ) {
      setCourse((prevCourse) => ({
        ...prevCourse,
       // image: inputElement.files[0],
      }));
    }
  };

  const handleCreateCourse = () => {
    const newCourseId = String(Date.now());

    const newCourse: Course = {
      id: newCourseId,
      title: course.title,
      description: course.description,
      image: course.image,
    };

    setCourses((prevCourses) => [...prevCourses, newCourse]); // Add new course to coursesData
    setCourse({
      id: "",
      title: "",
      description: "",
      image: undefined,
    });
  };

  return (
    <div className="container">
      <Header />
      <div className="volunteer-content">
        <h2>Become a Volunteer Instructor</h2>
        <p>Share your expertise with eager learners around the world.</p>
        <div className="course-form">
          <input
            type="text"
            placeholder="Course Title"
            value={course.title}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="Course Description"
            value={course.description}
            onChange={handleDescriptionChange}
          />
          <label htmlFor="courseImage" className="course-image-label">
            Upload Course Image
            <input
              type="file"
              id="courseImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <button className="btn" onClick={handleCreateCourse}>
            Create Course
          </button>
        </div>
      </div>
      <Courses/>
      <Footer />
    </div>
  );
};

export default Volunteer;
