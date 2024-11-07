import { useUsers } from "@/_shared/apis/test/test.hooks";
import { Button, Textfield } from "@hanarepo/components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginInputs } from "./Login.types";
import { Interpolation, Theme, css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { FEED } from "@/constants/routes";

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { userData } = useUsers();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    if (userData) {
      const userFound = userData.find(
        (user) => user.email === data.email && user.password === data.password,
      );
      if (userFound) {
        navigate(FEED);
      } else {
        alert("로그인 실패");
      }
    }
  };

  return (
    <div css={loginWrapper}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Textfield
            data-cy="email"
            onChange={onChange}
            value={value}
            type="email"
            variant="standard"
            placeholder="email"
            helperText="This field is required"
            validate={!!errors.email}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Textfield
            data-cy="password"
            onChange={onChange}
            value={value}
            type="password"
            variant="standard"
            placeholder="password"
            helperText="This field is required"
            validate={!!errors.password}
          />
        )}
        name="password"
      />
      <Button
        data-cy="login-button"
        title="로그인"
        variant="primary"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      />
    </div>
  );
};

export default Login;

const loginWrapper: Interpolation<Theme> = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
});
