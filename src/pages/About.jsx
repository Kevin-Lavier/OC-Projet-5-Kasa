import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import aboutImage from "../assets/vallee_montagne.webp";
import collapseData from "../datas/collapseData.json";
import "../components/Collapse/Collapse.scss";
import "../styles/global.scss";


const About = () => {
  return (
    <div>
    <div className="global-container">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;