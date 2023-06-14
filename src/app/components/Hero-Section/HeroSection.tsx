"use client";

import React from "react";
import Image from "next/image";
import heroImg from "../../assests/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
        <div className="row">
            <div className="col col-lg-6 col-md-12 ">
                <div className="hero__content">
                    <h2 className="mb-4 hero__title">
                        Lorem ipsum <br /> amet consectetur <br /> deserunt id iste
                    </h2>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                        Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                        quas officiis et repellat!
                    </p>
                    </div>
                    <div className="search">
                    <input type="text" placeholder="Find a course" />
                    <button className="btn">Search</button>
                </div>
            </div>
            <div className="col col-lg-6 col-md-12">
                <Image src={heroImg} alt="" className="hero__img" width={600} height={500}/>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;

