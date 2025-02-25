import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

type initialStateType = {
  user: string | null;
  authError: string | null;
};

const initialState: initialStateType = {
  user: null,
  authError: null,
};

export const addUserAction = createAsyncThunk(
  "auth/addUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.email; // Возвращаем только email
    } catch (error) {
      if (error instanceof Error) {
        console.log("error AddUser")
        throw new Error(error.message); // Выбрасываем ошибку с сообщением
      } else {
        console.log("Неизвестная ошибка:", error);
        throw new Error("Неизвестная ошибка"); // Обработка неизвестной ошибки
      }
    }
  }
);

export const singInAction = createAsyncThunk(
  "auth/SingIn",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.email;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message); // Выбрасываем ошибку с сообщением
      } else {
        console.log("Неизвестная ошибка:", error);
        throw new Error("Неизвестная ошибка"); // Обработка неизвестной ошибки
      }
    }
  }
);

export const LogOutAction = createAsyncThunk("auth/logOut", async () => {
  try {
    signOut(auth);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Выбрасываем ошибку с сообщением
    } else {
      console.log("Неизвестная ошибка:", error);
      throw new Error("Неизвестная ошибка"); // Обработка неизвестной ошибки
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      addUserAction.fulfilled,
      (state, action: PayloadAction<string | null>) => {
        state.user = action.payload;
      }
    );
    builder.addCase(addUserAction.pending,(state)=>{state.authError = null})
    builder.addCase(addUserAction.rejected, (state, action) => {
      state.authError = action.error.message || "Неизвестная ошибка";
    });
    builder.addCase(
      singInAction.fulfilled,
      (state, action: PayloadAction<string | null>) => {
        state.user = action.payload;
      }
    );
    builder.addCase(singInAction.pending, (state)=> {
      state.authError = null
    })
    builder.addCase(singInAction.rejected, (state, action)=> {
      state.authError = action.error.message || "неизвестная ошибка"
    })
    builder.addCase(LogOutAction.fulfilled, (state) => {
      state.user = null;
    });
    builder.addCase(LogOutAction.pending, (state) => {
      state.authError = null
    });
    builder.addCase(LogOutAction.rejected, (state, action) => {
      state.authError = action.error.message || "неизвестная ошибка"
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
