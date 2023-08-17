"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "@components/Header/Header";
import moment from "moment";

import Link from "next/link";
import "@app/index.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import Footer from "@components/Footer/Footer";
import { useMutationWithHandlers } from "@app/helpers/genericHelpers";
import { createCourse, getCourses } from "@/app/store/http/apiReactQuery";

export default function Signup() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const [showAlert, setShowAlert] = useState({
  //     message: null,
  //     isError: false,
  // });


  const useCreateCourse = useMutationWithHandlers(createCourse);

  const { mutate } = useCreateCourse({});

  const extraParams = {
    schedule: {
      begin: moment().toISOString(),
      end: moment().toISOString(),
      days_runs: {
        monday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        tuesday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        wednesday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        thursday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        friday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        saturday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
        sunday: {
          begin: moment().toISOString(),
          end: moment().toISOString(),
        },
      },
    },
    // status: CourseStatus.OPEN,
  };

  const onSubmit = async (data: any) => {
    const result = await mutate({
      ...data,
      ...extraParams,
      maxOfStudents: Number(data?.maxOfStudents),
    });
    console.log(result, "result");
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>
            <div className="form-floating my-2">
              <input
                type="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="John"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <label htmlFor="name">Name</label>
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <div className="form-floating my-2">
              <input
                type="description"
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                id="description"
                placeholder="Doe"
                {...register("description", {
                  required: "description is required",
                })}
              />
              <label htmlFor="description">Description</label>
              {errors.description && (
                <div className="invalid-feedback">
                  {errors.description.message}
                </div>
              )}
            </div>
            <div className="form-floating my-2">
              <input
                type="maxOfStudents"
                className={`form-control  rounded-2 ${
                  errors.maxOfStudents ? "is-invalid" : ""
                }`}
                id="maxOfStudents"
                placeholder="maxOfStudents"
                {...register("maxOfStudents", {
                  required: "maxOfStudents is required",
                })}
              />
              <label htmlFor="maxOfStudents">maxOfStudents</label>
              {errors.maxOfStudents && (
                <div className="invalid-feedback">
                  {errors.maxOfStudents.message}
                </div>
              )}
            </div>
            <button
              className="btn btn-primary w-100 py-2 submitBtn"
              type="submit"
            >
              Signup
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}
