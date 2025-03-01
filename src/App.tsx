import { onAuthStateChanged } from "firebase/auth";
import { SingUp } from "./components/Auth/SingUp";
import { SingIn } from "./components/Auth/SingIn";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { setUser } from "./app/authSlice.slice";
import { SingOut } from "./components/Auth/SingOut";

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
    {user ? <p>{user}</p>: <p>Authentication</p>}

    </>
  );
}

export default App;
