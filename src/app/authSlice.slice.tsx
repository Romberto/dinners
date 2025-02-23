import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { user: string | null } = {
  user: null,  // todo брать user из firebase
};

type AuthActionType = {
    email: string,
    password: string
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn: (state, action: PayloadAction<AuthActionType>) => {
        state.user = action.payload.email // todo заменить на CurrentUser из firebase
    },
    LogOut: (state) => {
        // todo добавить выход firebase
        state.user = null
    }
  },
});

export default authSlice.reducer;
export const {LogIn , LogOut} = authSlice.actions;
