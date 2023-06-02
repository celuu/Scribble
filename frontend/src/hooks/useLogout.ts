import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  

  const logout = () => {
    // removing the user from local storage
    localStorage.removeItem("user");

    // dispatch logout action to update global state
    dispatch({ type: "LOGOUT" })
  };
  return { logout };
};