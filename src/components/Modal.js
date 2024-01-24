// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "flex" : "none",
    position: "fixed",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    height: 500,
    width: 300,
  };

  const innerContainerStyle = {
    width: "100%", // Make the inner container take the full width
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={innerContainerStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
