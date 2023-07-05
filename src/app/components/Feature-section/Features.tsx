"use client";

import React from "react";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Enjoy fast and easy access to quick guides on e-learning courses.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Receive 24/7 support regarding questions or any troubleshooting issues.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Earn a certificate per course upon each successful completion.",
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
