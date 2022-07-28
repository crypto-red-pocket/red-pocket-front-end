import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import DAppHome from "./components/DApp/DAppHome";
import DAppCreateEnvelope from "./components/DApp/DAppCreateEnvelope";
import Navbar from "./components/Pages/Navbar";
import AllEnvelopes from "./components/DApp/AllEnvelopes";
import DAppEnvelopePage from "./components/DApp/DAppEnvelopePage";

function App() {
  return (
    <Router>
      <div className="scroll-smooth font-inter text-white w-screen bg-gradient-to-tr from-darkViolet to-darkRed bg-fixed">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dapp" element={<DAppHome />} />
          <Route
            exact
            path="/create-envelope"
            element={<DAppCreateEnvelope />}
          />
          <Route exact path="/each-envelope" element={<DAppEnvelopePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
