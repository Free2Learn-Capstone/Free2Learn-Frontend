"use client";

import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Image from "next/image";

import aboutImg from "@app/assets/about-us.png";

const AboutUs = () => {
  return (
    <section>
      <div className="row">
        <div className="col col-lg-6 col-md-12">
          <div className="about__img">
            <Image src={aboutImg} alt="" className="w-100" />
          </div>
        </div>

        <div className="col col-lg-6 col-md-12">
          <div className="about__content">
            <h2>About Us</h2>
            <p>Welcome to Free2Learn!</p>
            <p>
              At Free2Learn, our mission is to provide accessible and
              high-quality education to individuals around the world. We believe
              that education should be available to everyone, regardless of
              their financial or geographical limitations. Our goal is to
              empower individuals with the knowledge and skills they need to
              achieve personal and professional growth.
            </p>

            <h2>How It Works</h2>
            <p>
              Our platform connects passionate volunteers who have expertise in
              various specialties and subjects with individuals who are eager to
              learn. Volunteers generously contribute their time and knowledge
              to offer online classes in subjects such as language learning,
              programming, arts, music, cooking, and more.
            </p>
            <p>
              Our classes are conducted in a virtual environment, enabling
              learners from diverse backgrounds and locations to participate. We
              utilize user-friendly tools and technologies to facilitate
              interactive and engaging learning experiences. Classes are
              typically held in small groups to encourage active participation
              and foster a sense of community.
            </p>

            <h2>Our Community</h2>
            <p>
              We are proud to have a vibrant and diverse community of learners
              and volunteers. Free2Learn brings together individuals from
              different cultures, age groups, and professional backgrounds. Our
              platform fosters a supportive and inclusive environment, where
              individuals can come together to share knowledge, connect, and
              learn from one another.
            </p>
            <p>
              Our volunteers are dedicated and passionate about their subjects,
              and they create a nurturing space for learners to acquire new
              skills, explore their interests, and pursue their educational
              goals. We encourage collaboration, respect, and open-mindedness
              among our community members.
            </p>

            <h2>Get Involved</h2>
            <p>
              Whether you are an expert in a particular field or a lifelong
              learner eager to expand your skills, Free2Learn offers
              opportunities for everyone. If you have a passion for teaching and
              would like to contribute your knowledge to our community, consider
              becoming a volunteer instructor. You can share your expertise and
              make a positive impact on the lives of learners worldwide.
            </p>
            <p>
              If you're interested in taking classes, browse through our course
              catalog to discover a wide range of subjects. Enroll in the
              classes that align with your interests and embark on a journey of
              continuous learning. Join our community today and unlock your
              potential!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
