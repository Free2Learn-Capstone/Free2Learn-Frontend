"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "@components/Header/Header";
import Link from "next/link";
import "@app/index.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import {useRouter} from "next/navigation";
import { useEffect } from "react";
import Footer from "@components/Footer/Footer";
import { verifyTokenAndGetRole } from "@/utils/auth";


interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const redirectBasedOnRole = (role: string) => {
    if (role === 'SUPER_ADMIN') {
      router.push('/admin');
    } else if (role === 'VOLUNTEER') {
      router.push('/volunteer');
    } else if (role === 'STUDENT') {
      router.push('/student');
    } else {
      router.push('/');
    }
  };
  
  const onSubmit = async (data: FormData) => {
    // Login api
    const BACKEND_URL = process.env.BACKEND_URL;
    try {
      const response = await axios.post(
        `//${BACKEND_URL}/api/v1/auth/login`,
        data
      );
      const token = response.data.data.accessToken;
      if (token) {
        const userRole = verifyTokenAndGetRole(token);
        console.log(userRole)
        console.log("Login successful!");

        if (userRole) {
          redirectBasedOnRole(userRole);
        }

      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error: any) {
      console.log("Error occurred during login:", error.message);
    }

    // console.log(data, "data");
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
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
            <div className="form-floating">
              <input
                type="password"
                className={`form-control ${
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
            <button
              className="btn btn-primary w-100 py-2 submitBtn"
              type="submit"
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">
              Not a member? <Link href="/signup">Signup</Link>
            </p>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

