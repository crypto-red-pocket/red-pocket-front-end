import React from "react";
import AllRightsReserved from "../Pages/AllRightsReserved";
import Navbar from "../Pages/Navbar";
import AllEnvelopes from "./AllEnvelopes";
import DAppCreateEnvelope from "./DAppCreateEnvelope";
import DAppEnvelopePage from "./DAppEnvelopePage";
import DAppFooter from "./DAppFooter";

const DAppHome = () => {
  return (
    <div>
      <AllEnvelopes />
      <div className="bg-gradient-to-b from-black/30 to-transparent mt-20">
        <DAppFooter />
      </div>
      <AllRightsReserved />
    </div>
  );
};

export default DAppHome;
