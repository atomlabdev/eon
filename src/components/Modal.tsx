import React from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  onClose: () => void;
  children: JSX.Element;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <header className="modal-header">
          <button onClick={onClose}>
            <IoIosCloseCircleOutline />
          </button>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
