import React from "react";
import MobileIllustration from "../../assets/contact-us-illustration.svg";

const Footer = () => {
  return (
    <div className="mx-auto text-center w-2/3 pb-32">
      <div className="flex text-left items-center">
        {/* Image */}
        <div className="flex flex-1 max-h-[30rem]">
          <img className="" src={MobileIllustration} alt="Envelope Image" />
          <a
            className="hidden"
            href="https://www.freepik.com/vectors/mobile-sms"
          >
            Mobile sms vector created by redgreystock - www.freepik.com
          </a>
        </div>
        {/* Text */}
        <div className="flex flex-1 flex-col justify-start">
          <h2 className="text-4xl text-lightViolet font-semibold pb-5">
            Contact Us
          </h2>
          <p className="text-lightGrey">
            Have any suggestions or queries? Drop us an email at
            <div>
              <a
                className="text-lightRed text-xl "
                href="mailto:contact@redpocket.io"
              >
                contact@redpocket.io
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
