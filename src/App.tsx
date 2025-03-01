import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { setUser } from "./app/authSlice.slice";
import './App.scss';
import { ButtonIcon } from "./components/UI/ButtonIcon/ButtonIcon";
import setting from './assets/img/setting.svg'
import home from './assets/img/home.svg'
import orders from './assets/img/orders.svg'
import account from './assets/img/account.svg'
import { Button } from "./components/UI/Button/Button";

function App() {
  const dispatch = useAppDispatch()
useEffect(()=>{
  const lissen = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email));
    } else {
      dispatch(setUser(null));
    }
  });
  return () => lissen();
}, [])
const user = useAppSelector((state)=> state.redusers.authReducer.user)
  return (
    <>
    {user ? <p>{user}</p>: <p>No Authentication</p>}
      <ButtonIcon icon={setting}/>
      <ButtonIcon icon={account} text='account'/>
      <ButtonIcon icon={home} text='home'/>
      <ButtonIcon icon={orders} text={"orders"}/>
      <Button>Click</Button>
    </>
  );
}

export default App;
