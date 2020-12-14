import "./maincontent.css";
import React from "react";

import mostruns from "../json-files/most_runs_average_strikerate.json";

const MostRuns = () => {
  return (
    <div className="main__mostrun maincontent">
      <div className="main__mostrun__header">
        <h1>Players with most runs</h1>
        <p>Get to know the players' scores.</p>
        <div className="search__input">
          <input placeholder="Search and filter the results" />
          <button className="search">Search</button>
        </div>
      </div>
      <div className="mostruns">
        {mostruns.map((run) => (
          <div className="player">
            <h1>{run.batsman}</h1>
            <p>Total runs : {run.total_runs}</p>
            <p>Out : {run.out}</p>
            <p>No. of balls : {run.numberofballs}</p>
            <p>Strike rate : {Math.floor(run.strikerate)}</p>
            <p>Average : {Math.floor(run.average)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRuns;
