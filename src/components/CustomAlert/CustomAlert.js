import "./CustomAlert.css";
import React from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ message }) => {
  return (
    <>
      <Alert variant="secondary" className="custom-alert w-50">
        {message}
      </Alert>
    </>
  );
};

export default CustomAlert;
