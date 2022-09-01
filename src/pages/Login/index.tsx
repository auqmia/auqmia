import { Input } from "../../components/Input/style";
import { LabelForm } from "../../components/Label/style";
import { ContainerLoginForm, ContainerLogin } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BsCheckLg, BsEyeSlash, BsEye } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "../../components/ErrorValidators/styles";
import schema from "../../validators/loginUser";
import { IUserLogin } from "../../services/loginUserApi";

const Login = () => {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useContext(AuthContext);

  return (
    <ContainerLogin>
      <ContainerLoginForm onSubmit={handleSubmit(loginUser)}>
        <h1 className="titulo">Login</h1>
        <div className="container-input">
          <div className="wrap-form">
            <LabelForm>Email</LabelForm>
            <Input
              placeholder="email@gmail.com"
              type="text"
              {...register("email")}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div className="wrap-form">
            <LabelForm>Senha</LabelForm>
            <div className="div-pass">
              <Input
                placeholder="Digite aqui sua senha"
                type={visible ? "text" : "password"}
                {...register("password")}
              />
              {visible ? (
                <BsEye onClick={() => setVisible(!visible)} className="eyes" />
              ) : (
                <BsEyeSlash
                  onClick={() => setVisible(!visible)}
                  className="eyes"
                />
              )}
            </div>
            <Error>{errors.password?.message}</Error>
          </div>
        </div>
        <button type="submit" className="button-login">
          <BsCheckLg />
        </button>
        <div className="footer-form">
          <p className="paragraph-form">Não possui conta?</p>
          <button className="button-register">Cadastra-se</button>
        </div>
      </ContainerLoginForm>
    </ContainerLogin>
  );
};

export default Login;
