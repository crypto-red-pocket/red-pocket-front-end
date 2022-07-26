import React from "react";
import AnimatedBg from "../Others/AnimatedBg";

const Header = () => {
  return (
    <div className="">
      <div className="flex h-[90vh] container mx-auto">
        <section className="flex flex-1 text-white items-center">
          <div className="">
            <h1 className="text-6xl font-semibold">Red Pocket</h1>
            <sub className="text-2xl text-lightViolet">
              DeFi Payments for your loved ones!
            </sub>
            <p className="text-lightGrey mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              laboriosam aliquid unde ipsam, similique alias magnam quis eum
              numquam saepe dignissimos minus magni natus quae corporis
              architecto aliquam voluptas. Quasi, eos? Animi quod perferendis
              exercitationem iste molestias tempore ad voluptatum.
            </p>
          </div>
        </section>
        <div className="flex flex-1">
          <AnimatedBg />
        </div>
      </div>
    </div>
  );
};

export default Header;
