import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Characters from "./views/Characters";
import Episodes from "./views/Episodes";
import Locations from "./views/Locations";

export type Page = "characters" | "locations" | "episodes";

const CurrentView = ({ currentPage }: { currentPage: Page }) => {
  if (currentPage === "locations") return <Locations />;
  if (currentPage === "episodes") return <Episodes />;
  return <Characters />;
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("characters");

  const changePage = (newPage: Page) => setCurrentPage(newPage);

  return (
    <div className="container">
      <div id="modal" />
      <Nav changePage={changePage} currentPage={currentPage} />
      <main className="main">
        <CurrentView currentPage={currentPage} />
      </main>
    </div>
  );
}

export default App;
