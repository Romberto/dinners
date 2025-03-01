import React, { useState } from "react";
import styled from "./Header.module.css";
import logo from "../../../assets/img/logo.svg";
import userIconSingIn from "../../../assets/img/user_singin.svg";
import userIconSingOut from "../../../assets/img/user_singout.svg";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { LogOutAction } from "../../../app/authSlice.slice";
import { Icon } from "../../Icon/Icon";
import { Modal } from "../../Modal/Modal";

export const Header: React.FC = () => {
  const user = useAppSelector((state) => state.redusers.authReducer.user);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false)
  const handleCloseModal = () => {
    setIsVisible(false)
  }
  const handleSingIn = () => {
    setIsVisible(true)
  };
  const handleSingOut = () => {
    dispatch(LogOutAction());
  };
  return (
    <header className={styled.header}>
      <div className={styled.logo}>
        <img src={logo} alt="logo" className={styled.logo_img} />
        <div>
          <span>заказ</span>
          <span>едьбы</span>
        </div>
      </div>
      {!user ? (
        <Icon
          src={userIconSingIn}
          alt={"user_icon"}
          text={"войти"}
          onClick={handleSingIn}
        />
      ) : (
        <Icon
          src={userIconSingOut}
          alt={"user_icon"}
          text={"выйти"}
          onClick={handleSingOut}
        />
      )}
      <Modal isShow={isVisible} onClose={handleCloseModal}/>
    </header>
  );
};
