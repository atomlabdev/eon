import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import LocationModal from "./LocationModal";
import { LOCATION } from "../../queries";

const mocks = [
  {
    request: {
      query: LOCATION,
      variables: { id: "1" },
    },
    result: {
      data: {
        location: {
          id: "1",
          name: "Earth (C-137)",
          type: "Planet",
          dimension: "Dimension C-137",
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LocationModal result={{ id: "1", name: "Earth (C-137)" }} />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays location data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LocationModal result={{ id: "1", name: "Earth (C-137)" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

  const type = screen.getByText(/Planet/i);
  expect(type).toBeVisible();

  const dimension = screen.getByText(/Dimension C-137/i);
  expect(dimension).toBeVisible();
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: LOCATION,
        variables: { id: "1" },
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <LocationModal result={{ id: "1", name: "Earth (C-137)" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
