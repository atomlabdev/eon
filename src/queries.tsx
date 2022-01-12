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
