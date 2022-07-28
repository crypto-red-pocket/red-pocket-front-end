import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Popup from "reactjs-popup";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import DAppCreateEnvelope from "../DApp/DAppCreateEnvelope";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <nav className="text-white font-light bg-transparent top-0 z-50 sticky backdrop-blur-md">
      <div
        className="container mx-auto flex justify-between py-5 items-center
      border-b-2 border-lightRed/10"
      >
        <div className="font-inter font-bold text-2xl cursor-pointer">
          <RouterLink to="/">
            <span className="text-lightRed">Red</span>
            <span className="text-lightViolet">Pocket_</span>
          </RouterLink>
        </div>

        <aside className="flex gap-10 text-lg">
          <div className="hover:text-lightViolet my-auto hover:scale-105 cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About
            </Link>
          </div>
          <div className="hover:text-lightViolet my-auto hover:scale-105 cursor-pointer">
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Team
            </Link>
          </div>
          <div className="hover:text-lightViolet my-auto hover:scale-105 cursor-pointer">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact
            </Link>
          </div>

          <div className="hover:text-lightViolet my-auto hover:scale-105 cursor-pointer">
            <RouterLink to="/dapp">Launch dApp</RouterLink>
          </div>

          {/* Popup Button to dApp */}
          <div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="button ease-in-out duration-300 bg-gradient-to-tr from-lightViolet to-lightRed text-darkViolet font-semibold w-max px-10 py-1 rounded-lg hover:px-12 "
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
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
