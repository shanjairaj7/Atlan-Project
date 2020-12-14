import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Cricket Mania</h1>

      <div className="sidebar__links">
        <Link to="/" className="sidebar__link">
          🏏 Matches
        </Link>
        <Link to="/mostruns" className="sidebar__link">
          🏏 Most runs
        </Link>
        <Link to="/players" className="sidebar__link">
          🏏 Players
        </Link>
        <Link to="/teams" className="sidebar__link">
          🏏 Teams
        </Link>
        <Link to="/teamscores" className="sidebar__link">
          🏏 Team scores
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
