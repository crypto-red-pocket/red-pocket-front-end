import React from "react";
import DAppLeaderboardData from "../ImportHelpers/DAppLeaderboardData";

const DAppLeaderboard = () => {
  return (
    <div className="w-full mx-auto text-center py-10">
      <header className="text-4xl text-lightViolet font-semibold pb-5">
        Leaderboard
      </header>

      <table className="w-full table-auto rounded-lg">
        <thead className="h-16 bg-black border-lightViolet/10 border-2 text-lg text-lightRed">
          <th className="font-normal px-5">#</th>
          <th className="font-normal px-5">Address</th>
          <th className="font-normal px-5">Name</th>
          <th className="font-normal px-5">Amt. Won</th>
        </thead>
        <tbody className="">
          {DAppLeaderboardData.map((eachRow) => (
            <tr className="hover:bg-darkViolet h-16 border-lightViolet/10 border-2">
              <td className="px-5 text-center">{eachRow.id}</td>
              <td className="px-5 text-center">{eachRow.address}</td>
              <td className="px-5 text-center">{eachRow.name}</td>
              <td className="px-5 text-center">{eachRow.amt_won}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DAppLeaderboard;
