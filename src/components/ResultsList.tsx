import { ApolloError } from "@apollo/client";
import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import { Result } from "../types";

interface ResultsListProps {
  loading: boolean;
  error: ApolloError | undefined;
  results: Result[];
  onSelect: (result: Result) => void;
}

const ResultsList = ({
  loading,
  error,
  results,
  onSelect,
}: ResultsListProps) => {
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <ul className="results">
        {results &&
          results.map((result) => (
            <li key={result.id}>
              <button className="result" onClick={() => onSelect(result)}>
                {result.name}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ResultsList;
