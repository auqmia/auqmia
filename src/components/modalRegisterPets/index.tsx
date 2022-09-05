import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Input } from "../Input/style";
import { LabelForm } from "../Label/style";
import { ContainerModal } from "./styles";
import { TitleForm } from "../titleForm/style";
import { ButtonBack, ButtonCheck } from "../../pages/Login/styles";
import { DivButton } from "../ModalUpUser/styles";
import { BsCheckLg } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";

interface IActive {
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const RegisterPets = ({ isActive, setIsActive }: IActive) => {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const { register, handleSubmit } = useForm();

  function onSubmit(data: {}) {
    const req = { userID: id, ...data };

    if (token) {
      api
        .post("/animals", req, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <ContainerModal>
      <section className="modal-register-pets">
        <div className="header-modal">
          <TitleForm>Cadastrar Pet</TitleForm>
        </div>

        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <LabelForm>Nome</LabelForm>
          <Input id="name" placeholder="Digite um nome" {...register("name")} />
          <p className="title-radio">Tipo</p>
          <div className="div-input-radio">
            <div className="custom-radio">
              <input
                type="radio"
                id="tipo"
                value="Gato"
                {...register("type")}
              />
              <label>Gato</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="css"
                value="Cachorro"
                {...register("type")}
              />
              <label>Cachorro</label>
            </div>
          </div>
          <p className="title-radio">Gênero</p>
          <div className="div-input-radio">
            <div className="custom-radio">
              <input
                type="radio"
                id="genero"
                value="Femia"
                {...register("genre")}
              />
              <label>Fêmia</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="css"
                value="Macho"
                {...register("genre")}
              />
              <label>Macho</label>
            </div>
          </div>
          <LabelForm>Url</LabelForm>
          <Input
            id="url"
            placeholder="Digite a url da foto"
            {...register("url")}
          />
          <LabelForm>Idade</LabelForm>
          <Input id="age" placeholder="Digite a idade" {...register("age")} />
          <LabelForm>Descrição</LabelForm>
          <Input
            id="description"
            placeholder="Digite uma descrição"
            {...register("description")}
          />
          <DivButton>
            <ButtonBack type="button" onClick={() => setIsActive(!isActive)}>
              <MdArrowBack className="icon-back" />
            </ButtonBack>
            <ButtonCheck type="submit">
              <BsCheckLg className="button-check" />
            </ButtonCheck>
          </DivButton>
        </form>
      </section>
    </ContainerModal>
  );
};

export default RegisterPets;
