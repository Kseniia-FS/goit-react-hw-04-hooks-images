import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal");

export const Modal = ({ closeModal, src }) => {
  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleCloseModal = (e) => {
    if (e.code === "Escape") {
      closeModal();
      window.removeEventListener("keydown", handleCloseModal);
    }
  };
  window.addEventListener("keydown", handleCloseModal);
  return createPortal(
    <div className={s.Overlay} onClick={handleBackDropClick}>
      <div className={s.Modal}>
        <img src={src} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
