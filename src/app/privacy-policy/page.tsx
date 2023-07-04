import PrivacyPolicy from "../components/Privacy-policy/PrivacyPolicy";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <div className="mt-5">
        <PrivacyPolicy></PrivacyPolicy>
      </div>
      <Footer></Footer>
    </div>
  );
}
