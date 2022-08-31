import { Input } from "../../components/Input/style";
import { LabelForm } from "../../components/Label/style";
import { ContainerLoginForm, ContainerLogin } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BsCheckLg } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/loginUser";
import { IUserLogin } from "../../services/loginUserApi";

const Login = () => {
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
          <div className="warp-form">
            <LabelForm>Email</LabelForm>
            <Input
              placeholder="email@gmail.com"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="warp-form">
            <LabelForm>Senha</LabelForm>
            <Input
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
            />
          </div>
        </div>
        <button type="submit" className="button-login">
          <BsCheckLg />
        </button>
        <div className="footer-form">
          <p className="paragrafo-form">Não possui conta?</p>
          <button className="button-cadastra-se">Cadastra-se</button>
        </div>
      </ContainerLoginForm>
    </ContainerLogin>
  );
};

export default Login;
