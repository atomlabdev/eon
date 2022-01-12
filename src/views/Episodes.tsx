import React from "react";
import { useQuery } from "@apollo/client";
import { EPISODES } from "../queries";
import ResultsList from "../components/ResultsList";

const Episodes = () => {
  const { loading, error, data } = useQuery(EPISODES);
  return (
    <ResultsList
      onSelect={(character) => console.log("select item", character)}
      loading={loading}
      error={error}
      results={data && data.episodes && data.episodes.results}
    />
  );
};

export default Episodes;
