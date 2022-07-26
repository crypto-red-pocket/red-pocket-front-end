import React from "react";

const TeamCard = (props) => {
  return (
    <div
      className="py-10 rounded-xl w-full  text-lightGrey
       hover:text-lightRed hover:-translate-y-2 ease-in-out duration-300  drop-shadow-lg"
    >
      <img
        className="h-36 mx-auto hover:scale-125 ease-in-out duration-300"
        src={props.profileDetails.img}
        alt={props.profileDetails.alt}
      />
      <header className="text-2xl py-5">{props.profileDetails.name}</header>
      <p className="text-lightGrey">{props.profileDetails.country}</p>
    </div>
  );
};

export default TeamCard;
