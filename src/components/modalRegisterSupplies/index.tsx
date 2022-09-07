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
import Select from "../Select";

const RegisterSupplies = () => {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const { isOpenModalSupplies, setIsOpenModalSupplis } =
    useContext(AuthContext);

  const productList = [
    "Areia Higiênica",
    "Ração para Gato",
    "Ração para Cachorro",
  ];
  const quantityList = ["2kg", "5kg", "10kg", "20kg", "30kg"];

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
        <TitleForm>Cadastrar Suprimentos</TitleForm>

        <form className="supplies__form" onSubmit={handleSubmit}>
          <Select
            label="Produto"
            options={productList}
            onClick={(e) => setProduct(e.target.id)}
          />
          <Select
            label="Quantidade"
            options={quantityList}
            onClick={(e) => setQuantity(e.target.id)}
          />
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
