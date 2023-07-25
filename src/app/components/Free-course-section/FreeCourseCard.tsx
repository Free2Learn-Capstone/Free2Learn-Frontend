"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  name: string;
  description: string;
  maxOfStudents: number;
  created_at: string;
  updated_at: string;
  status: string;
}


const FreeCourseCard = (props: { course: Course; imgUrl: string }) => {
  const { imgUrl, course } = props;
  const { name, maxOfStudents } = course || {};

  return (
    <Link href={`/courses/${name}/${course?.id}`}>
      <div className="single__free__course">
        <div className="free__course__img mb-5">
          <Image src={imgUrl} alt="" className="w-100" />
          <button className="btn free__btn">Free</button>
        </div>

        <div className="free__course__details">
          <h6>{name}</h6>

          <div className=" d-flex align-items-center gap-5">
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-user-line"></i> {13}k
            </span>

            <span className=" d-flex align-items-center gap-2">
              <i className="ri-star-fill"></i> {5}k
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FreeCourseCard;