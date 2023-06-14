"use client";

import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Image from "next/image";

import aboutImg from "../../assests/about-us.png";

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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Lorem ipsum</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Lorem ipsum</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Lorem ipsum</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
