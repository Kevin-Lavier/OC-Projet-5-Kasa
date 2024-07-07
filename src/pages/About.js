import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import aboutImage from "../assets/vallee_montagne.webp";

const About = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={aboutImage} />
      <Footer />
    </div>
  );
};

export default About;
