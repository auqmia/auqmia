import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Error } from "../../components/ErrorValidators/styles";
import { Input } from "../../components/Input/style";
import { LabelForm } from "../../components/Label/style";
import registerSchema from "../../validators/registerUser";
import { ContainerForm, ContainerLoginForm } from "../Login/styles";
import { BsCheckLg, BsEyeSlash, BsEye } from "react-icons/bs";
import { IUserRegister } from "../../services/registerUserApi";
import { useState } from "react";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });

  return (
    <ContainerForm>
      <ContainerLoginForm onSubmit={() => {}}>
        <h1 className="titulo">Cadastro</h1>
        <div className="container-input">
          <div className="wrap-form">
            <LabelForm>Nome</LabelForm>
            <Input type="text" {...register("name")} />
            <Error>{errors.name?.message}</Error>
          </div>

          <div className="wrap-form">
            <LabelForm>Email</LabelForm>
            <Input type="text" {...register("email")} />
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

          <div className="wrap-form">
            <LabelForm>Confirmar Senha</LabelForm>
            <div className="div-pass">
              <Input
                placeholder="Digite sua senha novamente"
                type={visible ? "text" : "password"}
                {...register("confirm_password")}
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
            <Error>{errors.confirm_password?.message}</Error>
          </div>

          <div className="wrap-form">
            <LabelForm>Data de Nascimento</LabelForm>
            <Input type="date" {...register("name")} />
            <Error>{errors.birthday?.message}</Error>
          </div>

          <div className="wrap-form">
            <LabelForm>Estado</LabelForm>
            <select {...register("district")}></select>
          </div>

          <div className="wrap-form">
            <LabelForm>Cidade</LabelForm>
            <Input type="text" {...register("city")} />
            <Error>{errors.city?.message}</Error>
          </div>

          <div className="wrap-form">
            <LabelForm>Bairro</LabelForm>
            <Input type="text" {...register("district")} />
            <Error>{errors.district?.message}</Error>
          </div>
        </div>

        <div className="wrap-form">
          <LabelForm>Tipo de cadastro</LabelForm>
          <Input type="radio" id="adopt" {...register("user_type")} />
          <LabelForm>Quero Adotar!</LabelForm>
          <Input type="radio" id="forAdoption" {...register("user_type")} />
          <LabelForm></LabelForm>
          {/* <Input type="text" {...register("district")} /> */}
          {/* <Error>{errors.district?.message}</Error> */}
        </div>

        <div className="wrap-form">
          <LabelForm>Foto de Perfil</LabelForm>
          <Input type="url" {...register("picture")} />
          <Error>{errors.picture?.message}</Error>
        </div>

        <div className="wrap-form">
          <LabelForm>Sobre você</LabelForm>
          <Input type="text" {...register("bio")} />
          <Error>{errors.bio?.message}</Error>
        </div>

        <button type="submit" className="button-login">
          <BsCheckLg />
        </button>
        <div className="footer-form">
          <p className="paragraph-form">Não possui conta?</p>
          <button className="button-register">Cadastra-se</button>
        </div>
      </ContainerLoginForm>
    </ContainerForm>
  );
};

export default Register;
