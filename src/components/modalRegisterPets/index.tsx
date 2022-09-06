import { useForm } from "react-hook-form";
import { Input } from "../Input/style";
import { LabelForm } from "../Label/style";
import { ContainerModal } from "./styles";
import { TitleForm } from "../titleForm/style";
import { ButtonBack, ButtonCheck } from "../../pages/Login/styles";
import { DivButton } from "../ModalUpUser/styles";
import { BsCheckLg } from "react-icons/bs";
import { InputRadio, RadioDiv } from "../Input/style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MdArrowBack } from "react-icons/md";

const RegisterPets = () => {
  const { register, handleSubmit } = useForm();

  const { registerPet, setIsShowModalPet, isShowModalPet } =
    useContext(AuthContext);

  return (
    <ContainerModal>
      <section className="modal-register-pets">
        <div className="header-modal">
          <TitleForm>Cadastrar Pet</TitleForm>
        </div>

        <form className="Form" onSubmit={handleSubmit(registerPet)}>
          <LabelForm>Nome</LabelForm>
          <Input id="name" placeholder="Digite um nome" {...register("name")} />
          <p className="title-radio">Tipo</p>
          <div className="div-input-radio">
            <div className="custom-radio">
              <RadioDiv>
                <InputRadio
                  className="input--radio-register-pets"
                  type="radio"
                  id="tipo"
                  value="Gato"
                  {...register("type")}
                />
              </RadioDiv>
              <label>Gato</label>
            </div>
            <div className="custom-radio">
              <RadioDiv>
                <InputRadio
                  className="input--radio-register-pets"
                  type="radio"
                  id="css"
                  value="Cachorro"
                  {...register("type")}
                />
              </RadioDiv>
              <label>Cachorro</label>
            </div>
          </div>
          <p className="title-radio">Gênero</p>
          <div className="div-input-radio">
            <div className="custom-radio">
              <RadioDiv>
                <InputRadio
                  className="input--radio-register-pets"
                  type="radio"
                  id="genero"
                  value="Femea"
                  {...register("genre")}
                />
              </RadioDiv>
              <label>Fêmia</label>
            </div>
            <div className="custom-radio">
              <RadioDiv>
                <InputRadio
                  className="input--radio-register-pets"
                  type="radio"
                  id="genero"
                  value="Macho"
                  {...register("genre")}
                />
              </RadioDiv>
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
            <ButtonBack
              type="button"
              onClick={() => setIsShowModalPet(!isShowModalPet)}
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
};

export default RegisterPets;
