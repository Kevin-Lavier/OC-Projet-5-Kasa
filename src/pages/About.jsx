import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import aboutImage from "../assets/vallee_montagne.webp";
import collapseData from "../datas/collapseData.json";
import "../styles/Collapse.scss";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
      <Banner imageUrl={aboutImage} />
      </section>
      <section className="collapse-container">
        {collapseData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;