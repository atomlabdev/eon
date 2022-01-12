import React from "react";
import { useQuery } from "@apollo/client";
import { LOCATIONS } from "../queries";
import ResultsList from "../components/ResultsList";

const Episodes = () => {
  const { loading, error, data } = useQuery(LOCATIONS);
  return (
    <ResultsList
      loading={loading}
      error={error}
      results={data && data.locations && data.locations.results}
    />
  );
};

export default Episodes;
