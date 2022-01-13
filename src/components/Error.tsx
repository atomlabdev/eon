import { ApolloError } from "@apollo/client";
import React from "react";
import { BiError } from "react-icons/bi";

const Error = ({ error }: { error: ApolloError }) => {
  return (
    <div className="error" role="alert">
      <h2 className="error-title">
        <BiError className="error-icon" />
        Error
      </h2>
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
};

export default Error;
