import React, { useEffect } from "react";
import csv from "csvtojson";
import axios from "axios";

import players from "./json-files/Players.json";
import Sidebar from "./Components/Sidebar";
import MostRuns from "./Components/MostRuns";
import Players from "./Components/Players";
import TeamScores from "./Components/TeamScores";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Matches from "./Components/Matches";
import Teams from "./Components/Teams";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="main__content">
          <Switch>
            <Route path="/" exact>
              <Matches />
            </Route>

            <Route path="/mostruns">
              <MostRuns />
            </Route>

            <Route path="/players">
              <Players />
            </Route>

            <Route path="/teams">
              <Teams />
            </Route>

            <Route path="/teamscores">
              <TeamScores />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
