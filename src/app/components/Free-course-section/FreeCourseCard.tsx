"use client";
import React from "react";
import Image from "next/image";

const FreeCourseCard = (props: { item: { imgUrl: any; title: any;  }; }) => {
  const { imgUrl, title } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <Image src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Learn More</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            
          </span>

          <span className=" d-flex align-items-center gap-2">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
