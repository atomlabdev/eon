import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import CharacterModal from "./CharacterModal";
import { CHARACTER } from "../../queries";

const mocks = [
  {
    request: {
      query: CHARACTER,
      variables: { id: "1" },
    },
    result: {
      data: {
        character: {
          id: "1",
          name: "Rick Sanchez",
          status: "Alive",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          species: "Human",
          type: "test type",
          gender: "Male",
          origin: {
            name: "Earth (C-137)",
          },
          location: {
            name: "Citadel of Ricks",
          },
        },
      },
    },
  },
];

test("displays loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterModal result={{ id: "1", name: "test" }} />
    </MockedProvider>
  );
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays character data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterModal result={{ id: "1", name: "test" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

  const status = screen.getByText(/Alive/i);
  expect(status).toBeVisible();

  const species = screen.getByText(/Human/i);
  expect(species).toBeVisible();

  const type = screen.getByText(/test type/i);
  expect(type).toBeVisible();

  const gender = screen.getByText(/Male/i);
  expect(gender).toBeVisible();

  const origin = screen.getByText("Earth (C-137)");
  expect(origin).toBeVisible();

  const location = screen.getByText(/Citadel of Ricks/i);
  expect(location).toBeVisible();
});

test("displays character image", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterModal result={{ id: "1", name: "Rick Sanchez" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

  const image = screen.getByAltText(/Rick Sanchez/i);
  expect(image).toHaveAttribute(
    "src",
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );
});

test("displays error state", async () => {
  const errorMocks = [
    {
      request: {
        query: CHARACTER,
        variables: { id: "1" },
      },
      error: new Error("An error occurred"),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <CharacterModal result={{ id: "1", name: "Rick Sanchez" }} />
    </MockedProvider>
  );
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
  const errorText = screen.getByText("An error occurred");
  expect(errorText).toBeVisible();
});
