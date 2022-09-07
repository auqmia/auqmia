import api from "../../services/api";
import { AiOutlineClose } from "react-icons/ai";
import { ContainerModal } from "../modalRegisterPets/styles";
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
      api.delete(`/supplies/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  }

  return (
    <ContainerModal>
      <section>
        <div>
          <p>Doar</p>
          <button onClick={() => setIsActive(!isActive)}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <span>{donate.product}</span>
          <span>{donate.quantity}</span>
        </div>
        <button
          onClick={() => {
            remove(donate.id);
            setIsActive(!isActive);
          }}
        >
          OK
        </button>
      </section>
    </ContainerModal>
  );
};

export default ModalDonate;
