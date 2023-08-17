"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Header from "@components/Header/Header";
import Link from 'next/link';
import "@app/index.css";
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import Footer from "@components/Footer/Footer";


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Login api
    console.log(data, 'data')
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 fw-normal">Sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="name@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format'
                  }
                })}
              />
              <label htmlFor="email">Email address</label>
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="form-floating">
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long'
                  }
                })}
              />
              <label htmlFor="password">Password</label>
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>
            <button className="btn btn-primary w-100 py-2 submitBtn" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">Not a member? <Link href="/signup">Signup</Link></p>
          </form>
        </main>
      </div>
      <Footer/>
    </div>
  );
};


