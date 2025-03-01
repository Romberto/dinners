import React from "react";
import styled from "./ButtonIcon.module.scss";
import { UiButtonType } from "../../../utils/types";

export type UiButtonIconType = {
  icon: string;
  text?: string;
} & UiButtonType;

export const ButtonIcon: React.FC<UiButtonIconType> = ({
  text,
  icon,
  className,
  ...rest
}) => {
  return (
    <button className={styled.btn} {...rest}>
      <img src={icon} alt="icon button" />
      {text && <p>{text}</p>}
    </button>
  );
};
