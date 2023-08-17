"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Link from "next/link";

const mockEnrolledCourses = [
  {
    id: 1,
    name: "Mathematics",
    instructor: "John Doe",
    duration: "1 hour",
    date: "2023-08-01",
    time: "10:00 AM - 12:00 PM",
    description: "Advanced mathematics course",
    meetingLink: "https://example.com/meeting1",
    registeredPeople: 20,
  },
  {
    id: 2,
    name: "History",
    instructor: "Jane Smith",
    duration: "1 hour",
    date: "2023-08-02",
    time: "3:00 PM - 5:00 PM",
    description: "In-depth history exploration",
    meetingLink: "https://example.com/meeting2",
    registeredPeople: 15,
  },
  {
    id: 3,
    name: "Science",
    instructor: "Alex Johnson",
    duration: "1 hour",
    date: "2023-08-03",
    time: "9:30 AM - 11:30 AM",
    description: "Introduction to scientific concepts",
    meetingLink: "https://example.com/meeting3",
    registeredPeople: 18,
  },
];

export default function MyCourses() {
  const [courses, setCourses] = useState<
    {
      id: number;
      name: string;
      instructor: string;
      duration: string;
      date: string;
      time: string;
      description: string;
      meetingLink: string;
      registeredPeople: number;
    }[]
  >([]);
  const [selectedCourse, setSelectedCourse] = useState<
    {
      id: number;
      name: string;
      instructor: string;
      duration: string;
      date: string;
      time: string;
      description: string;
      meetingLink: string;
      registeredPeople: number;
    } | null
  >(null);

  const router = useRouter();

  useEffect(() => {
    setCourses(mockEnrolledCourses);
  }, []);

  const handleViewDetails = (course: any) => {
    setSelectedCourse(course);
  };

  return (
    <div className="container">
      <Header />
      <main className="mt-5">
        <h4 className="mt-5 mb-5">Your Enrolled Courses</h4>
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4 mb-4" key={course.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">Instructor: {course.instructor}</p>
                  <p className="card-text">Duration: {course.duration}</p>
                  <p className="card-text">Date: {course.date}</p>
                  <p className="card-text">Time: {course.time}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(course)}
                  >
                     View Details
                {/* <Link href={`/course/${course.id}`}> View Details</Link> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCourse && (
          <div className="mt-4">
            <h2>{selectedCourse.name}</h2>
            <p>Instructor: {selectedCourse.instructor}</p>
            <p>Duration: {selectedCourse.duration}</p>
            <p>Date: {selectedCourse.date}</p>
            <p>Time: {selectedCourse.time}</p>
            <p>Description: {selectedCourse.description}</p>
            <p>Meeting Link: <a href={selectedCourse.meetingLink}>{selectedCourse.meetingLink}</a></p>
            <p>Registered People: {selectedCourse.registeredPeople}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
