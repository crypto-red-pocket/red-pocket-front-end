import React from "react";

const EachEnvelope = () => {
  return (
    <section
      className="flex flex-col justify-center items-center rounded-xl
        bg-envelopeCard bg-cover py-16 px-10
        relative"
    >
      <header className="text-lg text-lightViolet uppercase tracking-widest pb-8">
        Envelope Details
      </header>

      <div className="flex flex-col gap-8 items-center">
        {/* Top Section */}
        <section className="flex flex-col gap-2 text-left w-full">
          <div className="">
            <sub className="text-lightRed uppercase tracking-widest font-light">
              Created By
            </sub>
            <h3 className="text-3xl">Hannah Redmond</h3>
          </div>
          <div>
            <sub className="text-lightRed uppercase tracking-widest font-light">
              Message
            </sub>
            <p className="text-lg">
              Thanks for joining my community! First 5 people to open this
              envelope will get a reward.
            </p>
          </div>
        </section>
        {/* Bottom Section */}
        <section
          className="flex justify-between w-full
          bg-black/50 rounded-lg p-5"
        >
          <div>
            <sub className="text-lightRed uppercase tracking-widest font-light">
              Total Prize Amt.
            </sub>
            <p className="text-2xl pt-1">1,000 MATIC</p>
          </div>
          <div>
            <sub className="text-lightRed uppercase tracking-widest font-light">
              Participants
            </sub>
            <p className="text-2xl pt-1">2/3</p>
          </div>

          <div>
            <sub className="text-lightRed uppercase tracking-widest font-light">
              Valid Till
            </sub>
            <p className="text-xl pt-1">22-Aug-2022</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EachEnvelope;
