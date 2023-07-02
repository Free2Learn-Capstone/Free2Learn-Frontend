"use client";

import React from "react";
import Header from "@components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import Footer from "@components/Footer/Footer";
import CourseListingCard from "../components/CourseListingCard/CourseListingCard";

const coursesData = [
    {
      id: "01",
      title: "Web Developer BootCamp-2023 ",
      lesson: 15,
      students: 15.5,
      rating: 5.9,
    },
  
    {
      id: "02",
      title: "Professional Graphics Design",
      lesson: 15,
      students: 15.5,
      rating: 5.9,
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp- 2023 for Beginners",
      lesson: 15,
      students: 15.5,
      rating: 5.9,
    },
    {
      id: "04",
      title: "Web Developer BootCamp-2023 ",
      lesson: 15,
      students: 15.5,
      rating: 5.9,

    },
  
    {
      id: "05",
      title: "Professional Graphics Design",
      lesson: 15,
      students: 15.5,
      rating: 5.9,

    },
  
    {
      id: "06",
      title: "UI/UX BootCamp- 2023 for Beginners",
      lesson: 15,
      students: 15.5,
      rating: 5.9,

    },
  ];

const SearchPage: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Search Courses</h1>
                <p className="lead text-body-secondary">
                Using our intuitive search functionality, users can enter relevant keywords, topics, or specific criteria to discover courses tailored to their preferences. The search algorithm intelligently scans our course database, considering course titles, descriptions, tags, and categories, to deliver highly relevant and targeted results. This saves users valuable time and effort, allowing them to focus on the courses that match their specific learning objectives.
                </p>
                <p></p>
              </div>
            </div>
          </section>

          <div className="album py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {coursesData.map((c, i) => <CourseListingCard course={c} index={i} />)}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
