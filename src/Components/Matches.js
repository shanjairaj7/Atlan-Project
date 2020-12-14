import React, { useEffect, useState } from "react";
import "./maincontent.css";

import matches from "../json-files/matches.json";

const Matches = () => {
  const [matchesData, setMatchesData] = useState(matches);

  return (
    <div className="matches maincontent">
      <div className="matches__top__content">
        <h1 className="matches__header">Matches & Results</h1>
        <p className="matches_desc">
          View the recent IPL matches and the results of those matches.
        </p>
        <div className="search__input">
          <input placeholder="Search and filter the results" />
          <button className="search">Search</button>
        </div>
      </div>

      <div className="matches__content">
        {matches.map((match) =>
          match.id <= 50 ? (
            <div className="match">
              <div className="match__top">
                <h1 className="match__season">{match.Season}</h1>
                <h1 className="match__city">{match.city}</h1>
                <h1 className="match__date">{match.date}</h1>
              </div>
              <div className="team">
                <h1 className="match__team1"> {match.team1}</h1>
                <h1>vs</h1>
                <h1 className="match__team2">{match.team2}</h1>
              </div>
              <h1 className="match__tosswinner">
                Toss winner: {match.toss_winner}
              </h1>
              <h1 className="match__winner">Match winner: {match.winner}</h1>
              <h1 className="match__winruns">
                Win by: {match.win_by_runs} runs
              </h1>
              <h1 className="match__winwickets">
                Lost by: {match.win_by_wickets} wickets
              </h1>
              <h1 className="match__venue">Venue: {match.venue}</h1>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Matches;
