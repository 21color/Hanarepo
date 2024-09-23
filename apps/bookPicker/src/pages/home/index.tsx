import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const isLoginUser = sessionStorage.getItem("loginUser");

  if (!isLoginUser) {
    navigate("/login");
  }

  return <div>home</div>;
};
