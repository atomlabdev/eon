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