import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Locations from "./Locations";
import { LOCATIONS } from "../queries";

const mocks = [
  {
    request: {
      query: LOCATIONS,
    },
    result: {
      data: {
        locations: {
          results: [{ id: "1", name: "Earth (C-137)" }],
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Locations />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays locations list", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Locations />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const location = screen.getByText("Earth (C-137)");
  expect(location).toBeVisible();
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: LOCATIONS,
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <Locations />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
