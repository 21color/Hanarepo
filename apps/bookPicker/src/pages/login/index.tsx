import { useGetUserInfo } from "@/_shared/apis/User/user.hooks";
import { LoginForm } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginContainer, flexColumn, input } from "./style.css";
import BookImage from "@/assets/bookImage.webp";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { data } = useGetUserInfo() || [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = (useData) => {
    if (data) {
      const isLoginUser = data.find((user) => user.id === useData.id);

      if (isLoginUser) {
        sessionStorage.setItem("loginUser", JSON.stringify(isLoginUser));
        navigate("/");
      } else {
        alert("아이디가 존재하지 않습니다.");
      }
    }
  };

  return (
    <div className={loginContainer}>
      <img src={BookImage} alt="bookImage" width={200} />
      <form className={flexColumn} onSubmit={handleSubmit(onSubmit)}>
        <input className={`${input}`} {...register("id", { required: true })} />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};
