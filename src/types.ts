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
}

export interface CharacterResult {
  character: Character
}