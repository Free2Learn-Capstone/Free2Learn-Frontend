"use client";

import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="row">
          <div className="col col-lg-12 col-md-12 text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Newsletter;
