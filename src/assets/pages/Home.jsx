import React from "react";
import "./Navv.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="Nav-bar">
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/Help">
          <li>Help</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
