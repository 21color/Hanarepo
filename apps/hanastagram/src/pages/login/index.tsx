import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "./Login.types";
import { useUsers } from "@/_shared/apis/test/test.hooks";
import { Button, Textfild } from "@hanarepo/components";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const { userData } = useUsers();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    userData?.map((user) => {
      if (user.email === data.email && user.password === data.password) {
        console.log("로그인 성공");
      }
    });
  };

  console.log(watch("email"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfild
        variant="standard"
        value={watch("email")}
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <Textfild
        variant="standard"
        value={watch("password")}
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <Button title="로그인" variant="primary" type="submit" />
    </form>
  );
};

export default Login;
