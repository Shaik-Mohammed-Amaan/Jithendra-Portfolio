import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Expertise from "../components/Expertise";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import CaseStudySection from "../components/CaseStudySection";
import ContactSection from "../components/ContactSection";
import UseIsVisible from "../components/UseIsVisible";
import { useRef } from "react";

const Home = () => {
  const ref1 = useRef();
  const isVisible1 = UseIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = UseIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = UseIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = UseIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = UseIsVisible(ref5);

  const ref6 = useRef();
  const isVisible6 = UseIsVisible(ref6);

  return (
    <div id="home">
      <Navbar />
      <div
        ref={ref6}
        className={`transition-opacity ease-in duration-300 ${
          isVisible6 ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />
      </div>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-300 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Expertise />
      </div>
      <div
        ref={ref2}
        className={`transition-opacity ease-in duration-300 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutMe />
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in duration-300 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Portfolio />
      </div>
      <div
        ref={ref4}
        className={`transition-opacity ease-in duration-300 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudySection />
      </div>
      <div
        ref={ref5}
        className={`transition-opacity ease-in duration-300 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
