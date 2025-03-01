import React, { MouseEvent, useState } from "react";
import ReactDOM from "react-dom";
import styled from "./Modal.module.css";
import { SingIn } from "../Auth/SingIn";
type ModalType = {
  isShow: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalType> = ({ isShow, onClose }) => {
  const handleClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const portalRoot = document.getElementById("root-auth");
  if (!portalRoot) return null;
  if (!isShow) return null;

  return ReactDOM.createPortal(
    <div className={styled.overlay} onClick={handleClick}>
      <div className={styled.modal}>
        <SingIn />
      </div>
    </div>,
    portalRoot
  );
};
