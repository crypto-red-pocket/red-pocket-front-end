import "./App.css";
import Navbar from "./components/Pages/Navbar";
import Header from "./components/Pages/Header";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import CreateEnvelope from "./components/Pages/CreateEnvelope";
import Footer from "./components/Pages/Footer";
import AllRightsReserved from "./components/Pages/AllRightsReserved";

function App() {
  return (
    <div className="scroll-smooth font-inter text-white w-screen bg-gradient-to-tr from-darkViolet to-darkRed bg-fixed">
      <Navbar />
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
    </div>
  );
}

export default App;
