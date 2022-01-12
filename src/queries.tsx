import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export const CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
    }
  }
`;

export const EPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
      }
    }
  }
`;

export const LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
      }
    }
  }
`;
