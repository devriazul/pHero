import React, { useEffect, useState } from "react";
import useTeams from "../../hooks/useTeams";
import TeamPersone from "./TeamPersone";

const Teams = () => {
  const [teams, setTeams] = useTeams();
  return (
    <div className="hero">
      <div className=" hero-overlay">
        <div className="teams py-20 px-0 lg:px-20 ">
          <h1 className="text-center font-bold text-4xl mb-10 text-white">
            Our Expert In Different Solutions
          </h1>
          <div className=" flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {teams.map((singleTeamPersonInfo) => {
                return (
                  <TeamPersone
                    key={singleTeamPersonInfo._id}
                    singleTeamPersonInfo={singleTeamPersonInfo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
