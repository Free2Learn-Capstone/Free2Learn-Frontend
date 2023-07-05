"use client";

import React from "react";
import courseImg01 from "../../assests/web-development.png";
import courseImg02 from "../../assests/kids-learning.png";
import courseImg03 from "../../assests/seo.png";
import courseImg04 from "../../assests/basic-ui.png";
import courseImg05 from "../../assests/re-img.png";
import courseImg06 from "../../assests/machine-img.png";
import courseImg07 from "../../assests/c-img.png";
import courseImg08 from "../../assests/data-science.png";
import FreeCourseCard from "./FreeCourseCard";
import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    //students: 5.3,
    //rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    //students: 5.3,
    //rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization",
    imgUrl: courseImg03,
    //students: 5.3,
    //rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    //students: 5.3,
    //rating: 1.7,
  },
  {
    id: "05",
    title: "React- The Complete Guide",
    imgUrl: courseImg05,
    //students: 5.3,
    //rating: 1.7,
  },
  {
    id: "06",
    title: "Machine Learning A-Z",
    imgUrl: courseImg06,
    //students: 5.3,
    //rating: 1.7,
  },

  {
    id: "07",
    title: "3D Game Development",
    imgUrl: courseImg07,
    //students: 5.3,
    //rating: 1.7,
  },

  {
    id: "08",
    title: "Statistics for Data Science",
    imgUrl: courseImg08,
    //students: 5.3,
    //rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="free_class">
        <div className="row">
          <div className="col col-lg-12 col-md-12 text-center mb-5">
            <h2 className="fw-bold">Upcoming Courses</h2>
          </div>
          {freeCourseData.map((item) => (
            <div className="col col-lg-3 col-md-12 mb-5" key={item.id}>
              <FreeCourseCard item={item} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default FreeCourse;
