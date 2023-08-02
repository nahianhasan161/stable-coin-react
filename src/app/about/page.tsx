import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurEcoSystem from "./OurEcosystem";
import ContentCard from "../components/card/ContentCard";
import Testimonial from "./Testimonial";
import TitleCard from "./TitileCard";
import HeadingTitle from "../components/typography/HeadingTitle";
import ContentCardSection from "./ContentCardSection";



const About = () => {
  return (
    <div>
      <Hero />
      <TitleCard/>
      <OurMission />
      <OurEcoSystem />
      <ContentCardSection/>

      

    <Testimonial/>

    </div>
  );
};
export default About;
