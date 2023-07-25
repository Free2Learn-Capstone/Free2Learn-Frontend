"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Header from "@components/Header/Header";
import moment from "moment";
import "@app/index.css";
import { useRouter } from 'next/navigation';

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./createCourse.css";
import Footer from "@components/Footer/Footer";
import { useMutationWithHandlers } from "@app/helpers/genericHelpers";
import { createCourse } from "@/store/http/apiReactQuery";

export default function Signup() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const savedUser = typeof window !== 'undefined'&& window.localStorage.getItem("user") as string
   const user = savedUser ? JSON.parse(savedUser)
    : null; 

    console.log(user)

  const useCreateCourse = useMutationWithHandlers(createCourse);

  const { mutate } = useCreateCourse({});

  const onSubmit = async (data: any) => {
    const result = await mutate({
      ...data,
      user,
    });
    router.push("/courses");
  };

  return (
    <div className="container">
      <Header />
      <section className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add course</h3>
        </div>
        <div className="panel-body">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-horizontal"
            role="form"
          >
            <div className="form-group">
              <label className="col-sm-3 control-label">Name</label>
              <div className="col-sm-9">
                <input
                  {...register("name", { required: "Course Name is required" })}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Web developer bootcamp"
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Description</label>
              <div className="col-sm-9">
                <textarea
                  {...register("description", {
                    required: "Course Description is required",
                  })}
                  className="form-control"
                  id="description"
                  placeholder="Please write a brief description of your course"
                />
                {errors.description && <p>{errors.description.message}</p>}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Max students</label>
              <div className="col-sm-9">
                <input
                  {...register("maxOfStudents", {
                    required: "Max Students is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  className="form-control"
                  id="maxOfStudents"
                  placeholder="14"
                />
                {errors.maxOfStudents && <p>{errors.maxOfStudents.message}</p>}
              </div>
            </div>
            {/* <div className="form-group">
              <label className="col-sm-3 control-label">Image</label>
              <div className="col-sm-3">
                <label className="control-label small" htmlFor="file_img">
                  Image (jpg/png):
                </label>
                <input
                  {...register("file_img", { required: "Image is required" })}
                  type="file"
                  name="file_img"
                />
                {errors.file_img && <p>{errors.file_img.message}</p>}
              </div>
            </div> */}
            <hr />
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button type="submit" className="btn btn-primary">
                  Create course
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}