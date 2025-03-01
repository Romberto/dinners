import React from 'react';
import styled from './Header.module.scss'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import setting from './../../../assets/img/setting.svg'

export const Header: React.FC = () => {
  return (
    <header className={styled.header}>
        <ButtonIcon icon={setting}/>
    </header>
  );
};
