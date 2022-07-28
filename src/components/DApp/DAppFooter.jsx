import React from "react";
import ContractsData from "../ImportHelpers/ContractsData";
import Profile from "../ImportHelpers/TeamProfileImports";

const DAppFooter = () => {
  return (
    <div className="w-2/3 mx-auto py-20 flex gap-10 justify-between">
      <header className="font-inter font-bold text-2xl cursor-pointer">
        <span className="text-lightRed">Red</span>
        <span className="text-lightViolet">Pocket_</span>
      </header>

      <section className="flex gap-20">
        <ul className="flex flex-col gap-2">
          <li>Contract</li>
          {ContractsData.map((eachContract) => (
            <li className="text-lightViolet font-light">
              <a href={eachContract.contractAddress} target="_blank">
                {eachContract.networkName}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <li>Team Members</li>

          {Profile.map((eachProfile) => (
            <li className="text-lightViolet font-light">
              <a href={eachProfile.linkedInUrl} target="_blank">
                {eachProfile.fullName}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <li>HACKATON</li>
          <li className="text-lightViolet font-light">
            <a href="https://ethcchack2022.devpost.com/" target="_blank">
              Prizes
            </a>
          </li>
          <li className="text-lightViolet font-light">
            <a href="https://ethcchack2022.devpost.com/rules" target="_blank">
              Rules
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DAppFooter;
