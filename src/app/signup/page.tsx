"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "@components/Header/Header";

import { USER_TYPES } from "@/app/helpers/enums";

import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import './signup.css';
import Footer from "@components/Footer/Footer";

const SignupComponent: React.FC = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {

    // Login api
    console.log(data, 'data')
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
                type="firstName"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                id="firstName"
                placeholder="John"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              <label htmlFor="firstName">First Name</label>
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>
         <div className="form-floating my-2">
              <input
                type="lastName"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                id="lastName"
                placeholder="Doe"
                {...register("lastName", {
                  required: "Last Name is required",
                })}
              />
              <label htmlFor="lastName">Last Name</label>
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>
         <div className="form-floating my-2">
              <input
                type="email"
                className={`form-control  rounded-2 ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              <label htmlFor="email">Email address</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-floating my-2">
              <input
                type="password"
                className={`form-control rounded-2 ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <label htmlFor="password">Password</label>
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-floating">
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <select className="form-select my-2"  {...field}>
                    {[
                      { value: USER_TYPES.STUDENT, label: "Student" },
                      { value: USER_TYPES.VOLUNTEER, label: "Volunteer" },
                    ].map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              <label htmlFor="type">Type</label>
              {errors.type && (
                <div className="invalid-feedback">{errors.type.message}</div>
              )}
            </div>
            <button
              className="btn btn-primary w-100 py-2 submitBtn"
              type="submit"
            >
              Signup
            </button>
            <p className="mt-5 mb-3 text-body-secondary">
              Already a member? <Link href="/login">Login</Link>
            </p>
          </form>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default SignupComponent;

