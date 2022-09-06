import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonCheck, ButtonBack } from "../../pages/Login/styles";
import { IUpdateUser } from "../../services/updateUserApi";
import { Input } from "../Input/style";
import { LabelForm } from "../Label/style";
import { TitleForm } from "../titleForm/style";
import { ContainerModal, DivButton } from "./styles";
import { BsCheckLg } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";

function ModalUpdateRegister() {
  const { modalUpdateUser, setModalUpdateUser, updateUser } =
    useContext(AuthContext);
  const { register, handleSubmit } = useForm<IUpdateUser>();

  return (
    <ContainerModal isOpenModal={modalUpdateUser}>
      <section className="modal-update">
        <div className="header-modal">
          <TitleForm>Atualizar Perfil</TitleForm>
        </div>

        <form className="Form" onSubmit={handleSubmit(updateUser)}>
          <LabelForm>Nome</LabelForm>
          <Input
            type="text"
            placeholder="Digige seu novo nome"
            {...register("name")}
          />
          <LabelForm>Email</LabelForm>
          <Input
            type="email"
            placeholder="Digite seu novo email"
            {...register("email")}
          />
          <LabelForm>Senha</LabelForm>
          <Input
            type="password"
            placeholder="Digite sua nova senha"
            {...register("password")}
          />
          {/* <LabelForm>Bairro:</LabelForm>
          <Input
            type="text"
            placeholder="Digite seu novo bairro"
            {...register("bairro")}
          />
          <LabelForm>Cidade:</LabelForm>
          <Input
            type="text"
            placeholder="Digite sua nova cidade"
            {...register("cidade")}
          />
          <LabelForm>Estado:</LabelForm>
          <Input
            type="text"
            placeholder="Digite seu novo estado"
            {...register("estado")}
          /> */}
          <LabelForm>Url</LabelForm>
          <Input
            type="text"
            placeholder="Atualize sua foto"
            {...register("url")}
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
