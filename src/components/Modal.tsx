import React from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: JSX.Element;
}

const Modal = ({ onClose, title, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <header className="modal-header">
          <h1>{title}</h1>
          <button className="btn-reset" onClick={onClose}>
            <IoIosCloseCircleOutline size={24} />
          </button>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
