import { Input } from "../../components/Input/style";
import { LabelForm } from "../../components/Label/style";
import {
  Form,
  ContainerForm,
  ButtonBack,
  ButtonCheck,
  DivFooter,
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
        <div className="form__buttons">
          <ButtonBack
            className="form__button"
            type="button"
            onClick={() => back()}
          >
            <HiArrowNarrowLeft className="form__button--icon icon__arrow" />
          </ButtonBack>
          <ButtonCheck type="submit">
            <BsCheckLg className="icon__check" />
          </ButtonCheck>
        </div>
        <DivFooter className="form__footer">
          <p className="footer__text">Não possui conta?</p>
          <Link to="/register" className="form__link">
            Cadastra-se
          </Link>
        </DivFooter>
      </Form>
    </ContainerForm>
  );
};

export default Login;
