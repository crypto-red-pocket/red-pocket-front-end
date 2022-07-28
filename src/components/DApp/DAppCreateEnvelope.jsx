import React from "react";

const DAppCreateEnvelope = () => {
  return (
    <div className="mx-auto w-2/3 text-center pt-10">
      <header className="text-4xl text-lightViolet font-semibold pb-10">
        Create A New Envelope
      </header>
      {/* Form for creating envelope */}

      <form action="" className="pb-20 flex w-full gap-20">
        {/* left side */}
        <section className="w-1/2 flex flex-col gap-8">
          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="username"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Name
            </label>
            <input
              type="text"
              className="rounded-lg text-darkViolet font-semibold text-lg"
              placeholder="Type your name/alias"
              id="username"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="userMessage"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Message
            </label>
            <textarea
              name="userMessage"
              className="rounded-lg text-darkViolet font-semibold text-lg"
              placeholder="Type your message here"
              id="userMessage"
              cols="30"
              required
              rows="10"
            ></textarea>
          </div>
        </section>

        <aside className="w-1/2 flex flex-col justify-between">
          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="envelopeAmount"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Total Envelope Amount
            </label>
            <input
              className="rounded-lg text-darkViolet font-semibold text-lg"
              type="number"
              id="envelopeAmount"
              placeholder="Amount in MATIC (Polygon)"
            />
          </div>

          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="maxParticipants"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Max. Participants
            </label>
            <input
              className="rounded-lg text-darkViolet font-semibold text-lg"
              type="number"
              id="maxParticipants"
              placeholder="Type your answer here"
            />
          </div>

          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="envelopeValidity"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Envelope Valid Till
            </label>
            <input
              className="rounded-lg text-darkViolet font-semibold text-lg "
              type="date"
              id="envelopeValidity"
            />
          </div>

          <div className="w-full flex flex-col gap-2 text-left">
            <label
              htmlFor="userWalletAddress"
              className="text-lightRed uppercase tracking-widest font-light"
            >
              Connected Wallet Address
            </label>
            <input
              className="rounded-lg text-gray-500 font-semibold text-sm h-12 bg-gray-300"
              type="text"
              id="userWalletAddress"
              placeholder="Your Wallet Address Shows here"
              value="0xC6869257205e20c2A43CB31345DB534AECB49F6E"
              disabled
            />
          </div>

          <div className="w-full flex flex-col gap-2 text-left">
            <button
              className="bg-gradient-to-tr from-lightViolet to-lightRed 
              text-darkViolet text-xl
            font-semibold px-10 py-3 rounded-lg
            hover:bg-gradient-to-tr hover:from-purple-800 hover:to-purple-800 hover:text-white
            ease-in-out duration-500"
            >
              Submit
            </button>
          </div>
        </aside>
      </form>
    </div>
  );
};

export default DAppCreateEnvelope;
