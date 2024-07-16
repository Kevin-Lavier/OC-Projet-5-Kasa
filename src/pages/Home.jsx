import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeImage from "../assets/bord_de_mer.webp";
import "../styles/global.scss"


const Home = () => {
  return (
    <div>
    <div className="home-container">
      <Header />
      <main>
        <Banner
          isHome={true}
          text="Chez vous, partout et ailleurs"
          imageUrl={homeImage}
        />
        <section>
          <Gallery />
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
