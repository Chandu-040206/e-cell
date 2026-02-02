import React, { useMemo } from "react";
import InfoSlider from "./InfoSlider";
import image1 from "../utils/images/1.jpeg";
import image2 from "../utils/images/5.jpeg";
import image3 from "../utils/images/10.jpeg";
import Intro from "./Intro";
import EventSection from "./EventSection";
import SuccessStories from "./SuccessStories";
import Testimonial from "./Testimonial";

const Home = () => {
  const slides = useMemo(
    () => [
      {
        title: "OUR VISION",
        heading: "Empowering Innovation Through Collaboration",
        text: `Enable seamless collaboration among students, faculty, professionals, entrepreneurs, mentors and venture capitalists to incubate innovative ideas.`,
        image: image1,
        reverse: false,
      },
      {
        title: "ABOUT US",
        heading: "Student-driven, Impact-focused",
        text: `E-Cell RGUKT Ongole is a student-driven platform dedicated to nurturing innovation, leadership, and entrepreneurial skills among young minds.`,
        image: image2,
        reverse: true,
      },
      {
        title: "OUR MISSION",
        heading: "Turning Ideas into Ventures",
        text: `We empower students with skills, mentorship, and opportunities needed to transform ideas into impactful ventures.`,
        image: image3,
        reverse: false,
      },
    ],
    []
  );

  return (
    <div className="bg-slate-50">

        <Intro />

            <InfoSlider slides={slides} />

          <EventSection />
       <SuccessStories />
        <Testimonial/>

    </div>
  );
};

export default Home;
