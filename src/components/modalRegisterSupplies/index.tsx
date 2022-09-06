import { useState } from "react";
import { ContainerModal } from "../modalRegisterPets/styles";
import { ModalRegisterSupplies } from "./style";
import { BsCheckLg } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { DivButton } from "../ModalUpUser/styles";
import api from "../../services/api";
import { TitleForm } from "../titleForm/style";
import { ButtonBack, ButtonCheck } from "../../pages/Login/styles";

interface IActive {
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const RegisterSupplies = ({ isActive, setIsActive }: IActive) => {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    const req = { userID: id, product, quantity };

    if (token) {
      api
        .post("/supplies", req, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <ContainerModal>
      <ModalRegisterSupplies>
        <div>
          <TitleForm>Cadastrar Suprimentos</TitleForm>
        </div>

        <form onSubmit={handleSubmit}>
          <select
            id="product"
            onChange={(event) => setProduct(event.target.value)}
          >
            <option value="">--Selecione--</option>
            <option value="Areia de Gato">Areia de Gato</option>
            <option value="Ração de Gato">Ração de Gato</option>
            <option value="Ração de Cachorro">Ração de Cachorro</option>
          </select>

          <select
            id="quantity"
            onChange={(event) => setQuantity(event.target.value)}
          >
            <option value="">--Selecione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <DivButton className="div-button">
            <ButtonBack type="button" onClick={() => setIsActive(!isActive)}>
              <MdArrowBack className="icon__arrow" />
            </ButtonBack>
            <ButtonCheck type="submit">
              <BsCheckLg className="icon__check" />
            </ButtonCheck>
          </DivButton>
        </form>
      </ModalRegisterSupplies>
    </ContainerModal>
  );
};

export default RegisterSupplies;
