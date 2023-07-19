"use client";

import React from "react";
import courseImg1 from "../../assests/web-develop.png";
import courseImg2 from "../../assests/graphics-design.png";
import courseImg3 from "../../assests/ui-ux.png";
import courseImg4 from "../../assests/python.png";
import courseImg5 from "../../assests/javascript-img.png";
import courseImg6 from "../../assests/angular-img.png";
import CourseCard from "./CourseCard";
import "./courses.css";

const coursesData = [
  {
    id: "01",
    title: "Web Developer BootCamp-2023 ",
    lesson: 32,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design",
    lesson: 13,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp- 2023 for Beginners",
    lesson: 15,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "The Complete Python Bootcamp ",
    lesson: 25,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg4,
  },

  {
    id: "05",
    title: "The Complete Javascript 2023",
    lesson: 21,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg5,
  },

  {
    id: "06",
    title: "Angular- The Complete Guide",
    lesson: 18,
    //students: 15.5,
    //rating: 5.9,
    imgUrl: courseImg6,
  },
];

const Courses = () => {
  return (
    <section className="pop_course">
        <div className="row">
          <div className="col col-lg-12 col-md-12">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  These courses are popular based on economic demand and preference. These courses are subject to change based on popularity.
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </div>
          {coursesData.map((item) => (
            <div className="col col-lg-4 col-md-12 ">
              <CourseCard key={item.id} item={item} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Courses;
