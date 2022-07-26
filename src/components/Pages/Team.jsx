import React from "react";
import TeamCard from "../Elements/TeamCard";
import Profile from "../ImportHelpers/TeamProfileImports";

const Team = () => {
  return (
    <div className="mx-auto text-center w-2/3 py-24">
      <h2 className="text-4xl text-lightViolet font-semibold">
        A Global Team Of Blockchain Experts!
      </h2>

      <div className="flex gap-5 py-10">
        {Profile.map((prof) => (
          <TeamCard profileDetails={prof} />
        ))}
      </div>
    </div>
  );
};

export default Team;
