import React from "react";
import { Page } from "../App";
import NavLink from "./NavLink";

interface NavProps {
  changePage: (newPage: Page) => void;
  currentPage: Page;
}

const Nav = ({ changePage, currentPage }: NavProps) => {
  return (
    <header className="header">
      <nav className="nav" role="navigation">
        <ul>
          <li>
            <NavLink
              onSelect={() => changePage("characters")}
              isActive={currentPage === "characters"}
            >
              Characters
            </NavLink>
          </li>

          <li>
            <NavLink
              onSelect={() => changePage("episodes")}
              isActive={currentPage === "episodes"}
            >
              Episodes
            </NavLink>
          </li>

          <li>
            <NavLink
              onSelect={() => changePage("locations")}
              isActive={currentPage === "locations"}
            >
              Locations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
