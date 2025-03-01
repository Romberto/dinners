import React from "react";
import styled from "./Header.module.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import setting from "./../../../assets/img/setting.svg";
import { Logo } from "../Logo/Logo";

export const Header: React.FC = () => {
  return (
    <header className={styled.header}>
      <Logo />
      <ButtonIcon icon={setting} />
    </header>
  );
};
