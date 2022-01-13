import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Characters from "./Characters";
import { CHARACTERS } from "../queries";

const mocks = [
  {
    request: {
      query: CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [{ id: "1", name: "Rick Sanchez" }],
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Characters />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays characters list", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Characters />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const character = screen.getByText(/Rick Sanchez/i);
  expect(character).toBeVisible();
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: CHARACTERS,
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <Characters />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
