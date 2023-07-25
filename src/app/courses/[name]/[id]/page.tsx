"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Queries } from "@/app/helpers/enums";
import { getCourses } from "@/store/http/apiReactQuery";
import { useQuery } from "@tanstack/react-query";
import "../../coursesPage.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import courseImg04 from "@app/assets/ui-ux.png";
import Image from "next/image";

const CoursePage = () => {
  const params = useParams();
  const name = params?.name; //Web%20develop%2033

  const [toggle, setToggle] = useState("Enroll Now");

  // useEffect(() => {
  const fetchCourse = () => {
    const { isLoading: fetchCoursesInProgress, data: coursesData } = useQuery(
      [Queries.GET_COURSE, {}],
      () => getCourses(null, { name: decodeURIComponent(name) }),
      {
        // onError,
      }
    );

    return { coursesData, fetchCoursesInProgress };
  };

  const { coursesData, fetchCoursesInProgress } = fetchCourse();

  console.log(coursesData, "coursesData");

  return (
    <div className="container">
      <Header />
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{coursesData?.name}</h3>
          <div className="white-box text-center imageContainter">
            <Image src={courseImg04} className="img-responsive" />
          </div>
          <div className="row">
            <div className="description">
              <h4 className="box-title mt-5">{coursesData?.name}</h4>
              <p>{coursesData?.description}</p>
              <button
                className="btn btn-primary btn-rounded"
                onClick={() =>
                  setToggle(
                    toggle === "Enroll Now" ? "Leave Course" : "Enroll Now"
                  )
                }
              >
                {toggle}
              </button>
              <h3 className="box-title mt-5">Key Highlights</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-success"></i>Sturdy structure
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Designed to foster
                  easy portability
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Demo info
                </li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h3 className="box-title mt-5">Demo info</h3>
              <div className="table-responsive">
                <table className="table table-striped table-product">
                  <tbody>
                    <tr>
                      <td width="390">Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                    <tr>
                      <td>Demo info</td>
                      <td>Demo info</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;