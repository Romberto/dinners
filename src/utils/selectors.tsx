import { RootState } from "../app/store";

export const authFormErrorSelector = (state:RootState)=>state.redusers.authReducer.authError
export const userSelector = (state:RootState)=>state.redusers.authReducer.user