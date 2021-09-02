import React, { createContext, useContext, useState } from "react";
import { useLogin } from "../hooks/useLogin";

interface AuthContextInterface {
  token: string;
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}

export const AuthContext = createContext({} as AuthContextInterface);

type AuthProviderProps = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authKey, setAuthKey] = useState("");
  const { isLoggingIn, login } = useLogin();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("accessToken") ? true : false
  );

  const handleLogin = async (email: string, password: string) => {
    return login({ email, password })
      .then((key: any) => {
        setAuthKey(key.accessToken);
        localStorage.setItem("accessToken", key.accessToken);
        setIsAuthenticated(true);
        return key;
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleLogout = async () => {
    // logout();
    setAuthKey("");
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token: authKey,
        isAuthenticated,
        isLoggingIn,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
