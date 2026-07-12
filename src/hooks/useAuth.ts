import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "@/store";
import { login, logout, updateUser } from "@/store/authSlice";
import type { User } from "@/types";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const loginUser = (userData: User, token: string) => {
    dispatch(
      login({
        user: userData,
        token,
      })
    );
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const updateProfile = (userData: User) => {
    dispatch(updateUser(userData));
  };

  return {
    user,
    token,
    isAuthenticated,
    loginUser,
    logoutUser,
    updateProfile,
  };
};
