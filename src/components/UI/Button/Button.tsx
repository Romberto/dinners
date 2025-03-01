import React  from 'react';
import styled from './Button.module.scss'
import { UiButtonType } from '../../../utils/types';



export const Button: React.FC<UiButtonType> = ({ children, className='', ...rest }) => {
    return (
        <button className={`${styled.btn} ${className}`} {...rest}>
            {children}
        </button>
    );
};