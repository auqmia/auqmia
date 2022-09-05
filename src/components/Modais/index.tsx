import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { IUpdateUser } from "../../services/updateUserApi";
import { Input } from "../Input/style";
import { LabelForm } from "../Label/style";
import { ModalUpdateUser } from "./styles";

function ModalUpdateRegister() {
  const { modalUpdateUser, setModalUpdateUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<IUpdateUser>();

  return (
    <ModalUpdateUser isOpenModal={modalUpdateUser}>
      <h2>Atualizar cadastro</h2>
        <button className="close" onClick={() => setModalUpdateUser(false)}>x</button>
      <form onSubmit={handleSubmit(updateUser)} >
        <LabelForm>Nome:</LabelForm>
        <Input {...register("nome")}/>

        <LabelForm>Email:</LabelForm>
        <Input {...register("email")}/>

        <LabelForm>Senha:</LabelForm>
        <Input {...register("senha")}/>

        <LabelForm>Bairro:</LabelForm>
        <Input {...register("bairro")}/>

        <LabelForm>Cidade:</LabelForm>
        <Input {...register("cidade")}/>

        <LabelForm>Estado:</LabelForm>
        <Input {...register("estado")}/>

        <button type="submit">Atualizar</button>

      </form>
    </ModalUpdateUser>
  );
}

export default ModalUpdateRegister;
