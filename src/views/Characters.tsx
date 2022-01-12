import React from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS } from "../queries";
import ResultsList from "../components/ResultsList";

const Characters = () => {
  const { loading, error, data } = useQuery(CHARACTERS);
  return (
    <ResultsList
      loading={loading}
      error={error}
      results={data && data.characters && data.characters.results}
    />
  );
};

export default Characters;
