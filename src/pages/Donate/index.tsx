import { useEffect, useState } from "react";
import { UlDonate, DivMainDonarte } from "./style";
import api from "../../services/api";
import Header from "../../components/Header";
import ModalDonate from "../../components/modalDonate";
import { getUsersAll } from "../../services/getUsers";
import { FaHandHoldingHeart } from "react-icons/fa";

export interface IData {
  userId?: string;
  product: string;
  quantity: string;
  id: number;
}

const Donate = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState<IData[]>([]);
  const [donate, setDonate] = useState<IData>({} as IData);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("@AuqMia:token");

  useEffect(() => {
    if (token) {
      try {
        api.get("/supplies").then((res) => setData(res.data));
        getUsersAll().then((res) => {
          setUsers(res);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [data, token]);

  return (
    <>
      <Header />

      <DivMainDonarte>
        {/* <ul>
          {data?.map((elem) => (
            <li key={elem.id}>
              <div>
                <span>{elem.product}</span>
                <span>{elem.quantity}</span>
              </div>
              <button onClick={() => {
                setIsActive(!isActive);
                setDonate({id: elem.id, product: elem.product, quantity: elem.quantity})
                }}
              >
                Ajudar
              </button>
            </li>
          ))}
        </ul> */}

        <UlDonate>
          <div className="div__title--help">
            <h1 className="title__help--users">Doações</h1>
          </div>

          {users.map((elem: any) => (
            <li key={elem.id} className="list__users">
              <div className="div__list--user">
                <figure>
                  <img src={elem.picture} alt="userpicture" />
                </figure>
                <div className="div__info--users">
                  <div>
                    <h2>{elem.name}</h2>
                    <p>{`${elem.address.city}, ${elem.address.state}`}</p>
                  </div>
                  <div className="div__help--users">
                    <h3>Pedido</h3>
                  </div>
                  <div className="div__button--help">
                    <button
                      onClick={() => {
                        setIsActive(!isActive);
                        /* setDonate({
                          id: elem.id,
                          product: elem.product,
                          quantity: elem.quantity,
                        }); */
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
