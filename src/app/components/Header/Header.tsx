"use client";

import { useRef } from "react";
import Image from "next/image";
import logoImg from "@assets/logo.png";

import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about-us",
  },
  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Login",
    url: "/login",
  },

];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="/">
            <Image
              src={logoImg}
              alt="Logo Free2 Learn"
              className="logo__img"
              width={250}
              height={150}
            />
          </a>
        </div>

        <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <p className="mb-0 d-flex align-items-center gap-2">
              <i className="ri-phone-line"></i> +1 (800) 800-8000
            </p>
          </div>
        </div>

        <div className="mobile__menu">
          <span>
            <i className="ri-menu-line" onClick={menuToggle}></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
