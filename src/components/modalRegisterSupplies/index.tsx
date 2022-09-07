import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerModal } from "../modalRegisterPets/styles";
import { ModalRegisterSupplies } from "./style";
import { BsCheckLg } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { DivButton } from "../ModalUpUser/styles";
import { toast } from "react-toastify";
import api from "../../services/api";
import { TitleForm } from "../titleForm/style";
import { ButtonBack, ButtonCheck } from "../../pages/Login/styles";

const RegisterSupplies = () => {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const { isOpenModalSupplies, setIsOpenModalSupplis } =
    useContext(AuthContext);

  function handleSubmit(event: any) {
    event.preventDefault();

    const req = { userID: id, product, quantity };

    if (token) {
      api
        .post("/supplies", req, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsOpenModalSupplis(!isOpenModalSupplies);
          toast.success("Suplemento cadastrado com sucesso!", {
            autoClose: 900,
            theme: "dark",
          });
        })
        .catch((err) =>
          toast.error("Algo deu errado, tente novamente!", {
            autoClose: 900,
            theme: "dark",
          })
        );
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
            <option value="1">1kg</option>
            <option value="2">2kg</option>
            <option value="3">3kg</option>
            <option value="4">4kg</option>
            <option value="5">5kg</option>
            <option value="6">6kg</option>
            <option value="7">7kg</option>
            <option value="8">8kg</option>
            <option value="9">9kg</option>
            <option value="10">10kg</option>
          </select>
          <DivButton className="div-button">
            <ButtonBack
              type="button"
              onClick={() => setIsOpenModalSupplis(!isOpenModalSupplies)}
            >
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
