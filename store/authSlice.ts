import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: Boolean(localStorage.getItem("token")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },

    updateUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },
  },
});

export const {
  login,
  logout,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
