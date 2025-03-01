import React from 'react';
import { useAppDispatch } from '../../../app/hook';
import { LogOutAction } from '../../../app/authSlice.slice';

export const SingOut: React.FC = () => {
    const dispatch = useAppDispatch()
   const  handleButtonOut =() => {
        dispatch(LogOutAction())
   }
  return (
    <button onClick={handleButtonOut}>
        Exit
    </button>
  );
};
