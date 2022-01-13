import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import EpisodeModal from "./EpisodeModal";
import { EPISODE } from "../../queries";

const mocks = [
  {
    request: {
      query: EPISODE,
      variables: { id: "1" },
    },
    result: {
      data: {
        episode: {
          id: "1",
          name: "Pilot",
          air_date: "December 2, 2013",
          episode: "S01E01",
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EpisodeModal result={{ id: "1", name: "test" }} />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays character data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EpisodeModal result={{ id: "1", name: "Pilot" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

  const airDate = screen.getByText(/December 2, 2013/i);
  expect(airDate).toBeVisible();

  const episode = screen.getByText(/S01E01/i);
  expect(episode).toBeVisible();
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: EPISODE,
        variables: { id: "1" },
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <EpisodeModal result={{ id: "1", name: "Pilot" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
