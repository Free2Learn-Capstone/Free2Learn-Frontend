import React from "react";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-description">
        Welcome to Free2Learn&apos;s privacy policy. This document outlines how we
        collect, use, and protect any information you provide when using our
        esteemed online class platform.
      </p>

      <h2 className="privacy-policy-section">Information We Collect</h2>
      <p className="privacy-policy-subtitle">
        We may collect the following information:
      </p>
      <ul className="privacy-policy-list">
        <li>Your name and contact information</li>
        <li>Demographic information such as age, gender, and location</li>
        <li>Username and password for your user account</li>
        <li>Information related to the classes you enroll in or teach</li>
        <li>
          Any additional information you choose to provide, such as your
          interests or educational background
        </li>
      </ul>

      <h2 className="privacy-policy-section">Use of Collected Information</h2>
      <p className="privacy-policy-subtitle">
        We require this information to understand your needs and provide you
        with an unparalleled service. We may use the information for the
        following purposes:
      </p>
      <ul className="privacy-policy-list">
        <li>Managing user accounts and providing access to online classes</li>
        <li>Internal record keeping</li>
        <li>Improvement of our products and services</li>
        <li>
          Communicating with users about class updates, new courses, or other
          relevant information
        </li>
        <li>Aggregating data for statistical analysis and reporting</li>
      </ul>

      <h2 className="privacy-policy-section">Information Sharing</h2>
      <p className="privacy-policy-subtitle">
        We may share certain information with third parties in the following
        circumstances:
      </p>
      <ul className="privacy-policy-list">
        <li>
          Volunteers and instructors: If you enroll in a class, your basic
          information (name, username) may be shared with the volunteers or
          instructors associated with that class for communication and
          instructional purposes.
        </li>
        <li>
          Service providers: We may engage trusted third-party service providers
          to assist us in operating our platform and providing services to you,
          such as hosting providers or payment processors. These providers may
          have access to your personal information, but only to the extent
          necessary to perform their services.
        </li>
        <li>
          Legal requirements: We may disclose your information in response to a
          court order, subpoena, or other legal process, or to comply with
          applicable laws or regulations.
        </li>
      </ul>

      <h2 className="privacy-policy-section">Data Security</h2>
      <p className="privacy-policy-subtitle">
        We are committed to ensuring that your information is secure. We
        implement various security measures to protect your personal data from
        unauthorized access, disclosure, or alteration. However, please note
        that no method of transmission over the internet or electronic storage
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="privacy-policy-section">Third-Party Links</h2>
      <p className="privacy-policy-subtitle">
        Our platform may contain links tothird-party websites or services. These
        third-party sites have their own privacy policies, and we do not have
        control over their practices. Therefore, we cannot be responsible for
        the protection and privacy of any information you provide while visiting
        such sites. We recommend exercising caution and reviewing the privacy
        policies of those third-party sites before providing any personal
        information.
      </p>
      <h2 className="privacy-policy-section">
        Retention of Personal Information
      </h2>
      <p className="privacy-policy-subtitle">
        We will retain your personal information only for as long as necessary
        to fulfill the purposes outlined in this privacy policy, unless a longer
        retention period is required or permitted by law.
      </p>
      <h2 className="privacy-policy-section">Your Rights</h2>
      <p className="privacy-policy-subtitle">
        You have certain rights regarding your personal information, subject to
        applicable laws. These rights may include:
      </p>
      <ul className="privacy-policy-list">
        <li>
          The right to access the personal information we hold about you and
          receive a copy of it.
        </li>
        <li>
          The right to correct or update any inaccurate or incomplete personal
          information.
        </li>
        <li>
          The right to request the deletion of your personal information,
          subject to any legal obligations we may have to retain certain data.
        </li>
        <li>
          The right to object to the processing of your personal information for
          certain purposes.
        </li>
        <li>
          The right to withdraw your consent to the processing of your personal
          information.
        </li>
      </ul>
      <h2 className="privacy-policy-section">Children&apos;s Privacy</h2>
      <p className="privacy-policy-subtitle">
        Free2Learn does not knowingly collect personal information from children
        under the age of 13. If we become aware that we have collected personal
        information from a child under the age of 13 without parental consent,
        we will take steps to delete that information from our servers.
      </p>
      <h2 className="privacy-policy-section">Changes to this Privacy Policy</h2>
      <p className="privacy-policy-subtitle">
        We may update this privacy policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        significant changes by posting a prominent notice on our website or
        sending you a direct notification. We encourage you to review this
        policy periodically for the latest information on our privacy practices.
      </p>
      <h2 className="privacy-policy-section">Contact Us</h2>
      <p className="privacy-policy-subtitle">
        If you have any questions or concerns about our privacy policy or the
        handling of your personal information, please contact us using the
        contact information provided on our website.
      </p>
    </div>
  );
};
export default PrivacyPolicy;
