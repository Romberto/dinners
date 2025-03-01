import React from "react";
import styled from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import home from "../../../assets/img/home.svg";
import pikcup from "../../../assets/img/piccup.svg";
import orders from "../../../assets/img/orders.svg";
import account from "../../../assets/img/account.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={styled.footer}>
      <ul className={styled.footer__list}>
        <li className={styled.footer__item}>
          <Link to="/">
            <ButtonIcon icon={home} text="home" />
          </Link>
        </li>
        <li className={styled.footer__item}>
          <Link to="/">
            <ButtonIcon icon={pikcup} text="pikcup" />
          </Link>
        </li>
        <li className={styled.footer__item}>
          <Link to="/">
            <ButtonIcon icon={orders} text="orders" />
          </Link>
        </li>
        <li className={styled.footer__item}>
          <Link to="/">
            <ButtonIcon icon={account} text="account" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
