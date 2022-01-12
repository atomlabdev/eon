import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS } from "../queries";
import ResultsList from "../components/ResultsList";
import { Result } from "../types";
import Modal from "../components/Modal";
import CharacterModal from "../components/modals/CharacterModal";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(
    null
  );
  const { loading, error, data } = useQuery(CHARACTERS);
  return (
    <>
      {selectedCharacter && (
        <Modal
          title={selectedCharacter.name}
          onClose={() => setSelectedCharacter(null)}
        >
          <CharacterModal result={selectedCharacter} />
        </Modal>
      )}
      <ResultsList
        onSelect={(character) => setSelectedCharacter(character)}
        loading={loading}
        error={error}
        results={data && data.characters && data.characters.results}
      />
    </>
  );
};

export default Characters;
