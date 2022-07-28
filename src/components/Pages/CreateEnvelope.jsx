import React, { useState } from "react";
import EnvelopIllustration from "../../assets/envelop-illustration.svg";
import { Link as RouterLink } from "react-router-dom";
import Popup from "reactjs-popup";
import DAppCreateEnvelope from "../DApp/DAppCreateEnvelope";

const CreateEnvelope = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div className="mx-auto text-center w-2/3 pb-10">
      <div className="flex text-left items-center">
        {/* Text */}
        <div className="flex flex-1 flex-col justify-start">
          <h2 className="text-4xl text-lightViolet font-semibold pb-5">
            Create An Envelope!
          </h2>
          <p className="text-lightGrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            laboriosam aliquid unde ipsam, similique alias magnam quis eum
            numquam saepe dignissimos.
          </p>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="ease-in-out duration-300 bg-gradient-to-tr from-lightViolet to-lightRed text-darkViolet font-semibold w-max px-10 py-2 mt-5 rounded-lg hover:px-16 "
          >
            Start Creating
          </button>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div
              className="modal w-screen h-screen relative bg-black/70 backdrop-blur-md
              flex items-center justify-center"
            >
              <a
                className="close text-6xl font-extralight text-lightViolet hover:text-red-500 cursor-pointer rounded-full
                  absolute top-10 right-10"
                onClick={closeModal}
              >
                &times;
              </a>
              <DAppCreateEnvelope />
            </div>
          </Popup>
        </div>
        {/* Image */}
        <div className="flex flex-1">
          <img className="" src={EnvelopIllustration} alt="Envelope Image" />
          <a
            className="hidden"
            href="https://www.freepik.com/vectors/email-notification"
          >
            Email notification vector created by upklyak - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateEnvelope;
