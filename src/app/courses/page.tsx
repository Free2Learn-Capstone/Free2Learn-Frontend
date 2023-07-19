"use client";

import React from "react";
import Header from "@components/Header/Header";
import "@app/index.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@components/Footer/Footer";
import { freeCourseData } from "../components/Free-course-section/FreeCourse";
import FreeCourseCard from "../components/Free-course-section/FreeCourseCard";

export default function Courses() {
  return (
    <div className="container">
      <Header />
      <section className="mt-5 pop_course">
        <div className="row">
          <div className="col col-lg-12 col-md-12">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className="fw-bold mb-3">Search Courses</h2>
              </div>
            </div>
          </div>
          {freeCourseData.map((item) => (
            <div className="col col-lg-3 col-md-12 mb-5" key={item.id}>
              <FreeCourseCard item={item} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
