import InputForm from "../../components/Input";
import { LabelForm } from "../../components/Label/style";
import { ContainerLoginForm, ContainerLogin } from "./styles";
import { BsCheckLg } from "react-icons/bs";

const Login = () => {
  return (
    <ContainerLogin>
      <ContainerLoginForm>
        <h1 className="titulo">Login</h1>
        <div className="container-input">
          <div className="warp-form">
            <LabelForm>Email</LabelForm>
            <InputForm inputValue="email@gmail.com" />
          </div>
          <div className="warp-form">
            <LabelForm>Senha</LabelForm>
            <InputForm inputValue="Digite aqui sua senha" />
          </div>
        </div>
        <button className="button-login">
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
