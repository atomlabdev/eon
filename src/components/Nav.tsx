import React from "react";
import { Page } from "../App";

interface NavProps {
  changePage: (newPage: Page) => void;
}

const Nav = ({ changePage }: NavProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <button
              className="nav-btn"
              onClick={() => changePage("characters")}
            >
              Characters
            </button>
          </li>

          <li>
            <button onClick={() => changePage("episodes")} className="nav-btn">
              Episodes
            </button>
          </li>

          <li>
            <button onClick={() => changePage("locations")} className="nav-btn">
              Locations
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
