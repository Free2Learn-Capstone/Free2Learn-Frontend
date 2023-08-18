"use client";

import React from "react";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Experience rapid learning and skill acquisition through our focused and comprehensive courses. Our engaging content and hands-on exercises ensure efficient learning, helping you achieve your goals in less time.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "Enjoy continuous support from our dedicated team of experts. Whether you need assistance with course content, technical issues, or general inquiries, we're here to help you every step of the way.",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc: "Elevate your profile with recognized certifications upon course completion. Showcase your newly acquired skills and knowledge to potential employers, clients, and peers, enhancing your career opportunities.",
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
