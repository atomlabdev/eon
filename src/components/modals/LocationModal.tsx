import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOCATION } from "../../queries";
import { LocationResult, Result } from "../../types";
import Loading from "../Loading";
import Error from "../Error";

interface LocationModalProps {
  result: Result;
}

const LocationModal = ({ result }: LocationModalProps) => {
  const { loading, error, data } = useQuery<LocationResult>(LOCATION, {
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
      <dl className="modal-data">
        <dt>Type</dt>
        <dd>{data?.location?.type || "N/A"}</dd>

        <dt>Dimension</dt>
        <dd>{data?.location?.dimension || "N/A"}</dd>
      </dl>
    </>
  );
};

export default LocationModal;
