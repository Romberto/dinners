import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { setUser } from "./app/authSlice.slice";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const lissen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => lissen();
  }, []);
  const user = useAppSelector((state) => state.redusers.authReducer.user);
  return (
    <div className="container layout">
      {user ? <p>{user}</p> : <p>No Authentication</p>}
      <header className="header"></header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
