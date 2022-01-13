import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTER } from "../../queries";
import { CharacterResult, Result } from "../../types";
import Loading from "../Loading";
import Error from "../Error";

interface CharacterModalProps {
  result: Result;
}

const CharacterModal = ({ result }: CharacterModalProps) => {
  const { loading, error, data } = useQuery<CharacterResult>(CHARACTER, {
    variables: { id: result.id },
  });

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {data?.character?.image && (
        <img
          src={data.character.image}
          alt={result.name}
          className="modal-image"
        />
      )}

      <dl className="modal-data">
        <dt>Status</dt>
        <dd>{data?.character?.status || "N/A"}</dd>

        <dt>Species</dt>
        <dd>{data?.character?.species || "N/A"}</dd>

        <dt>Type</dt>
        <dd>{data?.character?.type || "N/A"}</dd>

        <dt>Gender</dt>
        <dd>{data?.character?.gender || "N/A"}</dd>

        <dt>Origin</dt>
        <dd>{data?.character?.origin?.name || "N/A"}</dd>

        <dt>Location</dt>
        <dd>{data?.character?.location?.name || "N/A"}</dd>
      </dl>
    </>
  );
};

export default CharacterModal;
