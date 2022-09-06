import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonCheck, ButtonBack } from "../../pages/Login/styles";
import { IUpdateUser } from "../../services/updateUserApi";
import { Input } from "../Input/style";
import { LabelForm } from "../Label/style";
import { TitleForm } from "../titleForm/style";
import { ContainerModal, DivButton } from "./styles";
import { BsCheckLg, BsEye, BsEyeSlash } from "react-icons/bs";
import registerSchema from "../../validators/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";

import { MdArrowBack } from "react-icons/md";

function ModalUpdateRegister() {
  const { modalUpdateUser, setModalUpdateUser, updateUser, user } =
    useContext(AuthContext);
  const { register, handleSubmit } = useForm<IUpdateUser>({
    resolver: yupResolver(registerSchema),
  });

  const [visible, setVisible] = useState(false);

  return (
    <ContainerModal isOpenModal={modalUpdateUser}>
      <section className="modal-update">
        <div className="header-modal">
          <TitleForm>Atualizar Perfil</TitleForm>
        </div>

        <form className="Form" onSubmit={handleSubmit(updateUser)}>
          <LabelForm>Nome</LabelForm>
          <Input
            {...register("name")}
            defaultValue={user?.name}
            type="text"
            placeholder="Digite seu novo nome"
          />
          <LabelForm>Email</LabelForm>
          <Input
            defaultValue={user?.email}
            type="text"
            placeholder="Digite seu novo email"
            {...register("email")}
          />

          <LabelForm>Senha</LabelForm>
          <div className="input__password">
            <Input
              type={visible ? "text" : "password"}
              placeholder="Digite sua nova senha"
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

          <LabelForm>Foto</LabelForm>
          <Input
            defaultValue={user?.picture}
            type="text"
            placeholder="Digite a url da nova foto"
            {...register("picture")}
          />
          <LabelForm>Estado</LabelForm>
          <Input
            defaultValue={user.address?.state}
            type="text"
            placeholder="Digite o novo estado"
            {...register("address.state")}
          />
          <LabelForm>Cidade</LabelForm>
          <Input
            defaultValue={user.address?.city}
            type="text"
            placeholder="Digite a nova cidade"
            {...register("address.city")}
          />
          <LabelForm>Bairro</LabelForm>
          <Input
            defaultValue={user.address?.district}
            type="text"
            placeholder="Digite o novo bairro"
            {...register("address.district")}
          />
          <DivButton>
            <ButtonBack
              type="button"
              className="close"
              onClick={() => setModalUpdateUser(false)}
            >
              <MdArrowBack className="icon__arrow" />
            </ButtonBack>
            <ButtonCheck type="submit">
              <BsCheckLg className="icon__check" />
            </ButtonCheck>
          </DivButton>
        </form>
      </section>
    </ContainerModal>
  );
}

export default ModalUpdateRegister;
