import React from "react";
import Navbar from "./Pages/Navbar";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Team from "./Pages/Team";
import CreateEnvelope from "./Pages/CreateEnvelope";
import Footer from "./Pages/Footer";
import AllRightsReserved from "./Pages/AllRightsReserved";

const Home = () => {
  return (
    <React.Fragment>
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="createEnvelope">
        <CreateEnvelope />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <AllRightsReserved />
    </React.Fragment>
  );
};

export default Home;
