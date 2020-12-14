import React from "react";
import "./maincontent.css";

import teams from "../json-files/teams.json";

const Teams = () => {
  return (
    <div className="maincontent">
      <div className="main__teams__header">
        <h1>IPL Teams</h1>
        <p>List of all the teams played in the IPL.</p>
        <div className="search__input">
          <input placeholder="Search and filter the results" />
          <button className="search">Search</button>
        </div>
      </div>

      <div className="teams">
        {teams.map((team) => (
          <div className="iplTeam">
            <h1 className="iplTeam__title">{team.team1}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
