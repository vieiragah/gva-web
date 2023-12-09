import { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes";

type User = {
  name: string;
  email: string;
  token: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: object) => void;
  logout: () => void;
  user: () => User;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!sessionStorage.getItem("@user")
  );

  const navigate = useNavigate();

  const login = (user: object) => {
    sessionStorage.setItem("@user", JSON.stringify(user));
    setIsAuthenticated(true);
    return navigate(Routes.home.HOME);
  };

  const user = () => {
    const data = sessionStorage.getItem("@user");
    const format: User = JSON.parse(data!);
    return {
      ...format,
    };
  };

  const logout = () => {
    sessionStorage.removeItem("@user");
    setIsAuthenticated(false);
    return navigate(Routes.auth.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
