import React from "react";
import Image from "next/image";
import heroImg from "@app/assets/hero-img1.png";
import "./hero-section.css";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className="row">
            <div className="col col-lg-6 col-md-12 ">
                <div className="hero__content">
                    <h2 className="mb-4 hero__title">
                        Welcome to <br /> Free2Learn&apos;s <br /> Online Education Platform
                    </h2>
                    <p className="mb-5">
                        Empower yourself through <br /> accessible and inclusive education. <br /> Join a community dedicated to learning and growth.
                    </p>
                    </div>
                    <div className="search">
                    <input type="text" placeholder="Find a course" />
                    <Link href="/courses"><button className="btn">Search</button></Link>
                </div>
            </div>
            <div className="col col-lg-6 col-md-12">
                <Image src={heroImg} alt="Illustration of online learning" className="hero__img" width={600} height={500}/>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
