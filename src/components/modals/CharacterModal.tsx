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

  useEffect(() => {
    console.log("data uodated", data);
  }, [data]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>{result.name}</h1>

      <dl>
        <dt>Status</dt>
        <dd>{data?.character?.status}</dd>
      </dl>

      <dl>
        <dt>Species</dt>
        <dd>{data?.character?.species}</dd>
      </dl>

      <dl>
        <dt>Type</dt>
        <dd>{data?.character?.type}</dd>
      </dl>

      <dl>
        <dt>Gender</dt>
        <dd>{data?.character?.gender}</dd>
      </dl>

      <dl>
        <dt>Origin</dt>
        <dd>{data?.character?.origin?.name}</dd>
      </dl>
    </>
  );
};

export default CharacterModal;
