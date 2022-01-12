import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <h1>Modal</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
