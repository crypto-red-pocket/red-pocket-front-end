import React from "react";
import DAppEnvelope from "./DAppEnvelope";
import DAppFooter from "./DAppFooter";
import DAppLeaderboard from "./DAppLeaderboard";

const DAppEnvelopePage = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <header className="flex gap-10 justify-between items-center py-20">
          {/* Welcome Message START */}
          <aside className="flex flex-col w-1/3 py-10">
            <h1 className="text-6xl font-semibold">Welcome</h1>
            <sub className="text-2xl text-lightViolet pb-10">
              You have been invited to a Red Pocket
            </sub>
            <p className="text-lightGrey pb-10">
              An envelope is Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nobis, laboriosam aliquid unde ipsam, similique alias magnam
              quis eum numquam saepe dignissimos minus magni natus quae corporis
              architecto aliquam voluptas.
            </p>

            <button className="ease-in-out duration-300 bg-gradient-to-tr from-lightViolet to-lightRed text-darkViolet font-semibold w-max px-10 py-2 rounded-lg hover:px-12 ">
              Connect Wallet
            </button>
          </aside>
          {/* Welcome Message END */}
          <DAppEnvelope />
        </header>

        {/* Leaderboard */}
        <DAppLeaderboard />
      </div>
      <div className="bg-gradient-to-b from-black/30 to-transparent mt-20">
        <DAppFooter />
      </div>
    </div>
  );
};

export default DAppEnvelopePage;
