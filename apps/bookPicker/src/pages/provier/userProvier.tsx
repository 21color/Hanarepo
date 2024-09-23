import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export const UserProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const { loginUser } = sessionStorage;

  if (!loginUser) {
    navigate("/login");
  }

  return children;
};
