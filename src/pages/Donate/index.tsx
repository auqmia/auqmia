import { useContext, useEffect, useState } from "react";
import { UlDonate, DivMainDonarte } from "./style";
import api from "../../services/api";
import Header from "../../components/Header";
import ModalDonate from "../../components/modalDonate";

import { FaHandHoldingHeart } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

export interface IData {
  userId?: string;
  product: string;
  quantity: string;
  id: number;
}

const Donate = () => {
  const [donate, setDonate] = useState<IData>({} as IData);
  const { isActive, setIsActive, setData, data } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("@AuqMia:token");
    if (token) {
      api.get("/supplies").then((res) => {
        setData(res.data);
      });
    }
  }, [isActive, setData]);

  return (
    <>
      <Header />
      <DivMainDonarte>
        <UlDonate>
          <div className="div__title--help">
            <h1 className="title__help--users">Doações</h1>
          </div>

          {data.map((elem: any) => (
            <li key={elem.id} className="list__users">
              <div className="div__list--user">
                <figure>
                  <img src={elem.userData?.picture} alt="userpicture" />
                </figure>
                <div className="div__info--users">
                  <div>
                    <h2>{elem.userData?.name}</h2>
                    <p>{`${elem.userData?.address?.city}, ${elem.userData?.address?.state}`}</p>
                  </div>
                  <div className="div__help--users">
                    <p> {elem.product},</p>
                    <p> {elem.quantity}</p>
                  </div>
                  <div className="div__button--help">
                    <button
                      onClick={() => {
                        setDonate({
                          id: elem.id,
                          product: elem.product,
                          quantity: elem.quantity,
                        });
                        setIsActive(true);
                      }}
                    >
                      Ajudar <FaHandHoldingHeart />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </UlDonate>
      </DivMainDonarte>

      {isActive && (
        <ModalDonate
          donate={donate}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      )}
    </>
  );
};

export default Donate;
