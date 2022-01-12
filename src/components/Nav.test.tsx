import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

const changePage = () => {
  //
};

test("renders characters button", () => {
  render(<Nav changePage={changePage} />);
  const charactersBtn = screen.getByText(/Characters/i);
  expect(charactersBtn).toBeInTheDocument();
});

test("renders episodes button", () => {
  render(<Nav changePage={changePage} />);
  const episodesBtn = screen.getByText(/Episodes/i);
  expect(episodesBtn).toBeInTheDocument();
});

test("renders locations button", () => {
  render(<Nav changePage={changePage} />);
  const locationsBtn = screen.getByText(/Locations/i);
  expect(locationsBtn).toBeInTheDocument();
});
