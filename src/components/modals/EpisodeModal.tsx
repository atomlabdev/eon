import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { EPISODE } from "../../queries";
import { EpisodeResult, Result } from "../../types";
import Loading from "../Loading";
import Error from "../Error";

interface EpisodeModalProps {
  result: Result;
}

const CharacterModal = ({ result }: EpisodeModalProps) => {
  const { loading, error, data } = useQuery<EpisodeResult>(EPISODE, {
    variables: { id: result.id },
  });

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <dl className="modal-data">
        <dt>Air Date</dt>
        <dd>{data?.episode?.air_date || "N/A"}</dd>

        <dt>Episode</dt>
        <dd>{data?.episode?.episode || "N/A"}</dd>
      </dl>
    </>
  );
};

export default CharacterModal;
