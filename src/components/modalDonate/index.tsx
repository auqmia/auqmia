import api from "../../services/api";
import { toast } from "react-toastify";
import { ContainerModal } from "../modalRegisterPets/styles";
import { ModalDonateStyle } from "./style";
import { TitleForm } from "../titleForm/style";
import { ButtonBack, ButtonCheck } from "../../pages/Login/styles";
import { DivButton } from "../ModalUpUser/styles";
import { MdArrowBack } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { IData } from "../../pages/Donate";

interface IDataProps {
  donate: IData;
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const ModalDonate = ({ donate, setIsActive, isActive }: IDataProps) => {
  const token = localStorage.getItem("@AuqMia:token");

  function remove(id: number) {
    if (token) {
      api
        .delete(`/supplies/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          toast.success("Doação feita com sucesso!", {
            autoClose: 900,
            theme: "dark",
          });
        })
        .catch((err) => {
          toast.success("Doação negada!", {
            autoClose: 900,
            theme: "dark",
          });
        });
    }
  }

  return (
    <ContainerModal>
      <ModalDonateStyle>
        <div>
          <TitleForm>Doar</TitleForm>
        </div>
        <div className="div__donate">
          <p>{donate.product}</p>
          <p>{donate.quantity}</p>
        </div>
        <DivButton>
          <ButtonBack onClick={() => setIsActive(!isActive)}>
            <MdArrowBack className="icon__arrow" />
          </ButtonBack>
          <ButtonCheck
            onClick={() => {
              remove(donate.id);
              setIsActive(!isActive);
            }}
          >
            <BsCheckLg className="icon__check" />
          </ButtonCheck>
        </DivButton>
      </ModalDonateStyle>
    </ContainerModal>
  );
};

export default ModalDonate;
