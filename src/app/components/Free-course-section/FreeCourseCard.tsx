import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { createSlug } from "@/app/helpers/genericHelpers";
// import { useRouter } from "next/router";

interface FreeCourseCardProps {
  course: {
    id: string;
    name: string;
    description: string;
    students?: string;
    rating?: string;
    schedule: {
      begin: string;
      end: string;
      days_runs: Record<string, unknown>;
    };
  };
  imgUrl : string
}

const FreeCourseCard = (props: FreeCourseCardProps) => {
  const { course, imgUrl } = props;
  const {
    name,
    description,
    students = "Author name",
    rating = "5.0",
  } = course || {};

  return (
    // <Link href={`/courses/${createSlug(String(name))}/${course?.id}`}>
      <div className="single__free__course">
        <div className="free__course__img mb-5">
          <Image
            src={imgUrl}
            alt=""
            className="w-100"
            width={500}
            height={300}
          />
          <button className="btn free__btn">Free</button>
        </div>

        <div className="free__course__details">
          <h6>{name}</h6>
          <p>{description && `${description.slice(0, 120)}...`}</p>

          <div className=" d-flex align-items-center gap-5">
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-user-line"></i> {students}
            </span>

            <span className=" d-flex align-items-center gap-2">
              <i className="ri-star-fill"></i> {rating}
            </span>
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default FreeCourseCard;
