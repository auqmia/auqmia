import { useEffect, useState } from "react";

import api from "../../services/api";
import Header from "../../components/Header";
import ModalDonate from "../../components/modalDonate";

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

  useEffect(() => {
    api.get("/supplies").then(res => setData(res.data))
  },[data]);

  return (
    <>
      <Header />

      <div>
        <ul>
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
        </ul>
      </div>

      {isActive && <ModalDonate donate={ donate } setIsActive={setIsActive} isActive={isActive}/>}
    </>
  )
};

export default Donate;