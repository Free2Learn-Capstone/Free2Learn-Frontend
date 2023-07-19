import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Features from "./components/Feature-section/Features";
import FreeCourse from "./components/Free-course-section/FreeCourse";

import Footer from "./components/Footer/Footer";
import {Metadata} from "next";
=======
import MyComponent from './components/MyComponent';
>>>>>>> main

export default function Page() {
  return (
<<<<<<< HEAD
      <div className='container'>
        <Header />
        <HeroSection/>
        <AboutUs/>
        <Courses/>
        <Features/>
        <FreeCourse/>
        
        <Footer/>
      </div>
=======
      <main className={'container'}>
        <MyComponent />
      </main>
>>>>>>> main
  );
}
