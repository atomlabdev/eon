import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { EPISODES } from "../queries";
import ResultsList from "../components/ResultsList";
import Modal from "../components/Modal";
import EpisodeModal from "../components/modals/EpisodeModal";
import { Result } from "../types";

const Episodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Result | null>(null);
  const { loading, error, data } = useQuery(EPISODES);
  return (
    <>
      {selectedEpisode && (
        <Modal
          title={selectedEpisode.name}
          onClose={() => setSelectedEpisode(null)}
        >
          <EpisodeModal result={selectedEpisode} />
        </Modal>
      )}
      <ResultsList
        onSelect={(episode) => setSelectedEpisode(episode)}
        loading={loading}
        error={error}
        results={data && data.episodes && data.episodes.results}
      />
    </>
  );
};

export default Episodes;
