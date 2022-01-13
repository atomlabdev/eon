import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Episodes from "./Episodes";
import { EPISODES } from "../queries";

const mocks = [
  {
    request: {
      query: EPISODES,
    },
    result: {
      data: {
        episodes: {
          results: [{ id: "1", name: "Pilot" }],
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Episodes />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays episodes list", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Episodes />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const episode = screen.getByText(/Pilot/i);
  expect(episode).toBeVisible();
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: EPISODES,
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <Episodes />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
