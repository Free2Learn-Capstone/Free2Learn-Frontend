"use client";

import React from "react";
import Image from "next/image";
import logoImg from "@assets/logo.png";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
        <div className="row">
          <div className="col col-lg-3 col-md-12 mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <Image src={logoImg} alt="" className="logo__img" height={140} width={220} />
            </h2>
            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col col-lg-3 col-md-12 mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-group link__list">
              {footerQuickLinks.map((item, index) => (
                <li key={index} className="list-group-item border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-3 col-md-12 mb-4">
            <h6 className="fw-bold">Information</h6>
            <ul className="list-group link__list">
              {footerInfoLinks.map((item, index) => (
                <li key={index} className="list-group-item border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-3 col-md-12  ">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Kitchener, Ontario</p>
            <p> Phone: +1 (800) 800-8000 </p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
