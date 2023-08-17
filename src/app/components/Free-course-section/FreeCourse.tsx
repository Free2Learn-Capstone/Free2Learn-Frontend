"use client";

import React from "react";
import courseImg01 from "@app/assets/web-development.png";
import courseImg02 from "@app/assets/kids-learning.png";
import courseImg03 from "@app/assets/seo.png";
import courseImg04 from "@app/assets/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import "./free-course.css";

export const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "05",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "06",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "07",
    title: "Search Engine Optimization",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "08",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="free_class">
        <div className="row">
          <div className="col col-lg-12 col-md-12 text-center mb-5">
            <h2 className="fw-bold">Our Free Classes</h2>
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
