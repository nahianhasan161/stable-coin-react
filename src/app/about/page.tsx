import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurEcoSystem from "./OurEcosystem";
import ContentCard from "../components/card/ContentCard";
import Testimonial from "./Testimonial";
import TitleCard from "./TitileCard";
import HeadingTitle from '../components/typography/HeadingTitle';
import ContentCardSection from "./ContentCardSection";
import GlobalAdvisory from "./GlobalAdvisory";



const About = () => {
  return (
    <div>
      <Hero />
      <TitleCard/>
      <OurMission />
      <OurEcoSystem />
      <ContentCardSection/>

      

    <Testimonial/>
    <GlobalAdvisory/>
    <div className="flex flex-col   justify-center py-16 space-y-10 sm:px-10">
        {/* <h1 className=" text-start text-[50px] mb-10 ">Our Mission</h1> */}
        
        <HeadingTitle
        title="Working with Regulators"
        noLink={true}
        className="md:hidden lg:block"
        />
        
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/content1.png"
          imageOrderClass="float-left"
          button="User Protection"
          titleClass="hidden md:block lg:hidden"
        />
      </div>
    </div>
  );
};
export default About;
