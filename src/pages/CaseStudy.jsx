import  UseIsVisible  from "../components/UseIsVisible";
import { useRef } from "react";

import CaseStudyCardSorts from "../components/CaseStudyCardSorts";
import CaseStudyDesignIntermission from "../components/CaseStudyDesignIntermission";
import CaseStudyFooter from "../components/CaseStudyFooter";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyIdeation from "../components/CaseStudyIdeation";
import CaseStudyImageFooter from "../components/CaseStudyImageFooter";
import CaseStudyImageGallery from "../components/CaseStudyImageGallery";
import CaseStudyImages from "../components/CaseStudyImages";
import CaseStudyIntro from "../components/CaseStudyIntro";
import CaseStudyProblem from "../components/CaseStudyProblem";
import CaseStudyprojectBackground from "../components/CaseStudyprojectBackground";
import CaseStudyPrototype from "../components/CaseStudyPrototype";
import CaseStudyResearch from "../components/CaseStudyResearch";
import CaseStudySurveys from "../components/CaseStudySurveys";
import CaseStudyUsabilityTesting from "../components/CaseStudyUsabilityTesting";
import CaseStudyUserInterfaceDesign from "../components/CaseStudyUserInterfaceDesign";
import CaseStudyUserJourneys from "../components/CaseStudyUserJourneys";
import ContactSection from "../components/ContactSection";


const CaseStudy = () => {
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

  const ref8 = useRef();
  const isVisible8 = UseIsVisible(ref8);

  const ref12 = useRef();
  const isVisible12 = UseIsVisible(ref12);

  const ref13 = useRef();
  const isVisible13 = UseIsVisible(ref13);

  const ref14 = useRef();
  const isVisible14 = UseIsVisible(ref14);

  const ref15 = useRef();
  const isVisible15 = UseIsVisible(ref15);

  const ref16 = useRef();
  const isVisible16 = UseIsVisible(ref16);

  const ref17 = useRef();
  const isVisible17 = UseIsVisible(ref17);

  const ref18 = useRef();
  const isVisible18 = UseIsVisible(ref18);

  return (
    <div>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-300 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyHeader />
      </div>
      <div
        ref={ref2}
        className={`transition-opacity ease-in duration-300 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyIntro />
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in duration-300 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyImageGallery />
      </div>
      <div
        ref={ref4}
        className={`transition-opacity ease-in duration-300 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyprojectBackground />
      </div>
      <div
        ref={ref5}
        className={`transition-opacity ease-in duration-300 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyImages />
      </div>
      <div
        ref={ref6}
        className={`transition-opacity ease-in duration-300 ${
          isVisible6 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyProblem />
      </div>

      <CaseStudyResearch />

      <div
        ref={ref8}
        className={`transition-opacity ease-in duration-300 ${
          isVisible8 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudySurveys />
      </div>

      <CaseStudyCardSorts />

      <CaseStudyUserJourneys />

      <CaseStudyIdeation />

      <div
        ref={ref12}
        className={`transition-opacity ease-in duration-300 ${
          isVisible12 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyPrototype />
      </div>
      <div
        ref={ref13}
        className={`transition-opacity ease-in duration-300 ${
          isVisible13 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyUsabilityTesting />
      </div>
      <div
        ref={ref14}
        className={`transition-opacity ease-in duration-300 ${
          isVisible14 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyDesignIntermission />
      </div>
      <div
        ref={ref15}
        className={`transition-opacity ease-in duration-300 ${
          isVisible15 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyUserInterfaceDesign />
      </div>
      <div
        ref={ref16}
        className={`transition-opacity ease-in duration-300 ${
          isVisible16 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyImageFooter />
      </div>
      <div
        ref={ref17}
        className={`transition-opacity ease-in duration-300 ${
          isVisible17 ? "opacity-100" : "opacity-0"
        }`}
      >
        <CaseStudyFooter />
      </div>
      <div
        ref={ref18}
        className={`transition-opacity ease-in duration-300 ${
          isVisible18 ? "opacity-100" : "opacity-0"
        }`}
      >
        <ContactSection />
      </div>
    </div>
  );
};

export default CaseStudy;
