import { Input } from "../../components/Input/style";
import { LabelForm } from "../../components/Label/style";
import {
  ContainerLoginForm,
  ContainerLogin,
  ButtonCheck,
  ButtonBack,
  Form,
  ContainerForm
} from "./styles";

import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BsCheckLg, BsEyeSlash, BsEye } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "../../components/ErrorValidators/styles";
import { useNavigate } from "react-router-dom";
import schema from "../../validators/loginUser";
import { IUserLogin } from "../../services/loginUserApi";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useContext(AuthContext);

  const back = () => {
    navigate("/");
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(loginUser)}>
        <h1 className="form__title">Login</h1>
        <div className="form__container">
          <div className="form__input">
            <LabelForm>Email</LabelForm>
            <Input
              placeholder="email@gmail.com"
              type="text"
              {...register("email")}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div className="form__input">
            <LabelForm>Senha</LabelForm>
            <div className="input__password">
              <Input
                placeholder="Digite aqui sua senha"
                type={visible ? "text" : "password"}
                {...register("password")}
              />
              {visible ? (
                <BsEye
                  onClick={() => setVisible(!visible)}
                  className="icon__eyes"
                />
              ) : (
                <BsEyeSlash
                  onClick={() => setVisible(!visible)}
                  className="icon__eyes"
                />
              )}
            </div>
            <Error>{errors.password?.message}</Error>
          </div>
        </div>
        /*
        <div className="div-button">
          <ButtonBack
            type="button"
            className="button-back"
            onClick={() => back()}
          >
            <MdArrowBack className="icon-back" />
          </ButtonBack>
          <ButtonCheck type="submit" className="button-login">
            <BsCheckLg className="button-check" />
          </ButtonCheck>
          */
        <div className="form__buttons">
          <button
            type="button"
            className="form__button button--back"
            onClick={() => back()}
          >
            <HiArrowNarrowLeft className="form__button--icon icon__arrow" />
          </button>
          <button type="submit" className="form__button">
            <BsCheckLg className="form__button--icon" />
          </button>
        </div>
        <div className="form__footer">
          <p className="footer__text">Não possui conta?</p>
          <Link to="/register" className="form__link">
            Cadastra-se
          </Link>
        </div>
      </Form>
    </ContainerForm>
  );
};

export default Login;
