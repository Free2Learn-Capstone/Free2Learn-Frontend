import React from "react";
import "./about.css";
import Image from "next/image";import aboutImg from "@app/assets/about-us.png";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="row">
        <div className="col col-lg-6 col-md-12">
          <div className="about__img">
            <Image src={aboutImg} alt="About Us" className="about-image" />
          </div>
        </div>

        <div className="col col-lg-6 col-md-12">
          <div className="about__content">
            <h2 className="about__title">Discover Free2Learn</h2>
            <p className="about__intro">Welcome to an Enlightening Journey!</p>
            <p>
              At <span className="brand-name">Free2Learn</span>, our mission is to provide accessible and
              high-quality education to individuals around the world. We believe
              that education should be available to everyone, regardless of
              their financial or geographical limitations. Our goal is to
              empower individuals with the knowledge and skills they need to
              achieve personal and professional growth.
            </p>
            <h2 className="about__subheading">How It Works</h2>
            <p>
              Our platform connects passionate volunteers who have expertise in
              various specialties and subjects with individuals who are eager to
              learn. Volunteers generously contribute their time and knowledge
              to offer online classes in subjects such as language learning,
              programming, arts, music, cooking, and more.

            </p>
            <p>
              These virtual learning experiences foster an inclusive and
              supportive environment, enabling individuals from diverse
              backgrounds and locations to participate. Our user-friendly tools
              and cutting-edge technologies ensure interactive and immersive
              learning, with small-group settings to encourage active
              participation and establish a sense of community.
            </p>
            <h2 className="about__subheading">Our Community</h2>
            <p>
              At <span className="brand-name">Free2Learn</span>, we take immense
              pride in our vibrant and diverse community of learners and
              volunteers. A harmonious symphony of individuals from various
              cultures, age groups, and professional backgrounds come together
              on our platform. Here, an environment of compassion and
              inclusivity thrives, nurturing an atmosphere where knowledge knows
              no bounds, and learners and volunteers alike can connect, share,
              and learn from one another.
            </p>
            <p>
              Our passionate volunteers create nurturing spaces for learners to
              acquire new skills, explore their interests, and reach their
              educational zenith. We foster a culture of collaboration, respect,
              and open-mindedness, where everyone is celebrated for their unique
              contributions.
            </p>
            <h2 className="about__subheading">Get Involved</h2>
            <p>
              Whether you wield expertise in a specific field or are a lifelong
              learner with an insatiable thirst for knowledge, Free2Learn offers
              opportunities for everyone. If you have a passion for teaching and
              desire to enrich lives, consider becoming a volunteer instructor
              on our platform. By sharing your expertise, you can make a
              profound impact on the lives of learners across the globe. If
              you&apos;re eager to embark on a journey of continuous learning,
              explore our vast course catalog encompassing a wide range of
              subjects. Enroll in classes that align with your interests and
              aspirations, and let the quest for knowledge ignite your
              potential. Join our thriving community of visionaries, learners,
              and educators. Experience the joy of mutual growth and discovery
              as we collectively illuminate the path of knowledge and
              enlightenment. Together, let&apos;s redefine education, making it a
              beacon of hope and empowerment for all. Unleash your potential
              with Free2Learn and let the world become your limitless classroom.
              <span className="brand-name">Unlock your mind</span>,{" "}
              <span className="brand-name">Unlock your future</span> - Welcome
              to Free2Learn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
