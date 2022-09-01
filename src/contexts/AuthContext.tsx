import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAnimalsApi, IAnimals } from "../services/getAnimalsApi";
import { IUserLogin, loginUsers } from "../services/loginUserApi";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  loginUser: (data: IUserLogin) => Promise<void>;
  loginRoute: () => void;
  listAnimals: IAnimals[];
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const navigate = useNavigate();
  const [listAnimals, setListAnimals] = useState([]);

  useEffect(() => {
    getAnimals()
  },[])

  const loginUser = async (data: IUserLogin) => {
    loginUsers(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const loginRoute = () => {
    navigate("/login")
  }

  function getAnimals() {
    getAnimalsApi()
    .then((res) => {
      setListAnimals(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <AuthContext.Provider value={{ loginUser, loginRoute, listAnimals }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
