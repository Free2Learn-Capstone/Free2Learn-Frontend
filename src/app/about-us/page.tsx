import AboutUs from "../components/About-us/AboutUs"
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <div className="mt-5">
        <AboutUs></AboutUs>
      </div>
      <Footer></Footer>
    </div>
  );
}