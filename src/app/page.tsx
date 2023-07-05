import "./index.css";
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Features from "./components/Feature-section/Features";
import FreeCourse from "./components/Free-course-section/FreeCourse";

import Footer from "./components/Footer/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Free2Learn',
  description: 'Free2Learn',
};

export default async function Page() {
  return (
      <div className='container'>
        <Header />
        <HeroSection/>
        <AboutUs/>
        <Courses/>
        <Features/>
        <FreeCourse/>
        
        <Footer/>
      </div>
  );
}
