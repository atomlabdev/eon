import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { Result } from "../types";
import Modal from "./Modal";

interface ResultsListProps {
  loading: Boolean;
  error: ApolloError | undefined;
  results: Result[];
}

const ResultsList = ({ loading, error, results }: ResultsListProps) => {
  const [selectedItem, setSelectedItem] = useState<Result | null>(null);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      {selectedItem && <Modal onClose={() => setSelectedItem(null)} />}
      <ul className="results">
        {results &&
          results.map((result) => (
            <li key={result.id}>
              <button
                className="result"
                onClick={() => setSelectedItem(result)}
              >
                {result.name}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ResultsList;
