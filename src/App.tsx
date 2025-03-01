import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { setUser } from "./app/authSlice.slice";
import { Button } from "./components/UI/Button/Button";
import './App.scss';
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

    </>

    
  );
}

export default App;
