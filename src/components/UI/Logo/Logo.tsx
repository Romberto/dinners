import React from 'react';
import styled from './Logo.module.scss'
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <>
    <Link to='/'>
        <h1 className={styled.logo}>Daily Menu</h1>
    </Link>
    </>
  );
};
