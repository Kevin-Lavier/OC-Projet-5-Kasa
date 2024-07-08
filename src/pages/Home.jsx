import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeImage from "../assets/bord_de_mer.webp";

const Home = () => {
  return (
    <div>
      <div className="main">
        <Header />
        <Banner
          isHome={true}
          text="Chez vous, partout et ailleurs"
          imageUrl={homeImage}
        />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
