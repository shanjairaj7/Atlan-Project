import React from "react";
import "./maincontent.css";

import teamscores from "../json-files/teamwise_home_and_away.json";

const TeamScores = () => {
  return (
    <div className="main__teamscores maincontent">
      <div className="main__teamscores__header">
        <h1>Team scores</h1>
        <p>List of the scores of the IPL matches.</p>
        <div className="search__input">
          <input placeholder="Search and filter the results" />
          <button className="search">Search</button>
        </div>
      </div>

      <div className="teamscores">
        {teamscores.map((teamscore) => (
          <div className="teamscore">
            <h1 className="title">{teamscore.team}</h1>
            <p>Home matches : {teamscore.home_matches}</p>
            <p>Home wins : {teamscore.home_wins}</p>
            <p>Away matches : {teamscore.away_matches}</p>
            <p>Away wins : {teamscore.away_wins}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamScores;
