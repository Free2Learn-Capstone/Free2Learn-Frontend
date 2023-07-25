"use client";

import React, { useState } from "react";
import Header from "@components/Header/Header";
import "@app/index.css";
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@components/Footer/Footer";
import { freeCourseData } from "../components/Free-course-section/FreeCourse";
import FreeCourseCard from "../components/Free-course-section/FreeCourseCard";
import { useQuery } from "@tanstack/react-query";
import { Queries } from "../helpers/enums";
import { isArrayLength } from "../helpers/genericHelpers";
import { getCourses } from "@/store/http/apiReactQuery";

interface Course {
  id: string;
  name: string;
  description: string;
  maxOfStudents: number;
  created_at: string;
  updated_at: string;
  status: string;
}

export default function Courses() {

  const fetchAllCourses = () => {
    const {
      isLoading: fetchCoursesInProgress,
      data: coursesData,
      // refetch: adminUsersRefetch,
    } = useQuery([Queries.GET_COURSES, {}], () => getCourses(null, {}), {
      // onError,
    });

    return { coursesData, fetchCoursesInProgress };
  };

  const { coursesData, fetchCoursesInProgress } = fetchAllCourses();

  isArrayLength(coursesData) &&  coursesData.sort((a: Course, b: Course) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

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
          {isArrayLength(coursesData) ? (
            coursesData.map((item: Course, index: number) => (
              <div className="col col-lg-3 col-md-12 mb-5" key={item.id}>
                <FreeCourseCard
                  course={item}
                  imgUrl={freeCourseData[Math.floor(Math.random() * 4) + 1]?.imgUrl}
                />
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

