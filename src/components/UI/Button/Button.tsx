import React  from 'react';
import styled from './Button.module.scss'

type ButtonT = React.ButtonHTMLAttributes<HTMLButtonElement>  & {
    children?: React.ReactNode;
    className?: string; // Позволяет добавлять className
};

export const Button: React.FC<ButtonT> = ({ children, className, ...rest }) => {
    return (
        <button className={`${styled.btn} ${className}`} {...rest}>
            {children}
        </button>
    );
};