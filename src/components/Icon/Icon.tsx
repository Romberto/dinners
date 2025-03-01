import React from "react";
import styled from "./Icon.module.css";

export type IconType = {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
};

export const Icon: React.FC<IconType> = ({ src, alt, text, onClick }) => {
  return (
    <div className={styled.user_icon} onClick={() => onClick()}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
};
