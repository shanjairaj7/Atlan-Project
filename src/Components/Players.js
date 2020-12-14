import React from "react";
import "./maincontent.css";

import players from "../json-files/Players.json";

const Players = () => {
  return (
    <div className="main__players maincontent">
      <div className="main__players__header">
        <h1>Players</h1>
        <p>Get to know the players of the IPL.</p>
        <div className="search__input">
          <input placeholder="Search and filter the results" />
          <button className="search">Search</button>
        </div>
      </div>

      <div className="players">
        {players.map((player) => (
          <div className="player">
            <h1 className="name">{player[0]}</h1>
            {player[1] ? (
              <p className="dob">Born on : {player[1]?.substring(0, 10)}</p>
            ) : (
              <p>Born on : Not available</p>
            )}
            <p className="batting">Batting : {player[2]}</p>
            {player[3] ? (
              <p className="bowling">Bowling : {player[3]}</p>
            ) : (
              <p>Bowling : Not available</p>
            )}
            {player[4] ? (
              <p className="country">Country : {player[4]}</p>
            ) : (
              <p>Country : Not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
