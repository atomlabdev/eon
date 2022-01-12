export interface Result {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  }
  location: {
    name: string;
  }
  image: string;
}

export interface CharacterResult {
  character: Character
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

export interface EpisodeResult {
  episode: Episode
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

export interface LocationResult {
  location: Location
}