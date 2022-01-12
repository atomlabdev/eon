import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { LOCATIONS } from "../queries";
import ResultsList from "../components/ResultsList";
import { Result } from "../types";
import Modal from "../components/Modal";
import LocationModal from "../components/modals/LocationModal";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<Result | null>(null);
  const { loading, error, data } = useQuery(LOCATIONS);
  return (
    <>
      {selectedLocation && (
        <Modal
          title={selectedLocation.name}
          onClose={() => setSelectedLocation(null)}
        >
          <LocationModal result={selectedLocation} />
        </Modal>
      )}
      <ResultsList
        onSelect={(location) => setSelectedLocation(location)}
        loading={loading}
        error={error}
        results={data && data.locations && data.locations.results}
      />
    </>
  );
};

export default Locations;
