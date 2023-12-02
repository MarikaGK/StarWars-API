import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ModalWindow = ({ isDataLoading, onClose, children }) => {
  const modalBackdropRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = (ev) => {
      if (ev.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeOnBackdropClick = (ev) => {
    ev.preventDefault;
    if (modalBackdropRef.current === ev.target) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="modal-backdrop"
        ref={modalBackdropRef}
        onClick={closeOnBackdropClick}
      >
        <div className="modal-window">
          <button type="button" className="close-icon__btn" onClick={onClose}>
            X
          </button>
          {isDataLoading ? (
            <h4 className="loader">To wait, you must</h4>
          ) : (
            children
          )}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
