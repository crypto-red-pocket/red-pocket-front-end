import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="text-white font-light bg-transparent top-0 z-50 sticky backdrop-blur-md">
      <div
        className="container mx-auto flex justify-between py-5 items-center
      border-b-2 border-lightRed/10"
      >
        <div className="font-inter font-bold text-2xl cursor-pointer">
          <div
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <span className="text-lightRed">Red</span>
            <span className="text-lightViolet">Pocket_</span>
          </div>
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
          <div className="hover:text-lightViolet my-auto">
            <Link
              to="createEnvelope"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <button className="ease-in-out duration-300 bg-gradient-to-tr from-lightViolet to-lightRed text-darkViolet font-semibold w-max px-10 py-1 rounded-lg hover:px-12 ">
                Start Creating
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
