"use client";

import React from "react";
import courseImg1 from "@app/assets/web-develop.png";
import courseImg2 from "@app/assets/graphics-design.png";
import courseImg3 from "@app/assets/ui-ux.png";
import CourseCard from "./CourseCard";
import "./courses.css";

interface Course {
  id: string;
  title: string;
  lesson: number;
  students: number;
  rating: number;
  imgUrl: string;
}
interface CoursesProps {
  coursesData: Course[];
}

const coursesData = [
  {
    id: "01",
    title: "Web Developer BootCamp-2023 ",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp- 2023 for Beginners",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Web Developer BootCamp-2023 ",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "05",
    title: "Professional Graphics Design",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "06",
    title: "UI/UX BootCamp- 2023 for Beginners",
    lesson: 15,
    students: 15.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];


const Courses = () => {
  // const Courses: React.FC<CoursesProps> = ({ coursesData }) => {

  return (
    <section className="pop_course">
      <div className="row">
        <div className="col col-lg-12 col-md-12">
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-50">
              <h2>Discover Our Popular Courses</h2>
              <p>
                Embark on a transformative learning journey with Free2Learn's
                top-rated courses. Whether you're a novice or an expert, our
                courses are designed to empower you with practical skills and
                knowledge to excel in your chosen field.
              </p>
            </div>
            <div className="w-50 text-end">
              <button className="btn">See All</button>
            </div>
          </div>
        </div>
        {coursesData.map((item, index) => (
          <div key={index} className="col col-lg-4 col-md-12 ">
            <CourseCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
