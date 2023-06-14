"use client";

import React from "react";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
        <div className="row">
          {FeatureData.map((item, index) => (
            <div className="col col-lg-4 col-md-12" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Features;
