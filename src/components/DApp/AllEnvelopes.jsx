import React from "react";
import EachEnvelope from "./EachEnvelope";
import { Link as RouterLink } from "react-router-dom";

const randomNumberToBeDeleted = [1, 2, 3, 4, 5];

const AllEnvelopes = () => {
  return (
    <div className="mx-auto text-center w-2/3 py-20">
      <h2 className="text-4xl text-lightViolet font-semibold pb-10">
        All Envelopes
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {randomNumberToBeDeleted.map((eachNum) => (
          <RouterLink to="/each-envelope">
            <EachEnvelope />
          </RouterLink>
        ))}
      </div>
    </div>
  );
};

export default AllEnvelopes;
