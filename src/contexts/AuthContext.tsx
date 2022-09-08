import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api, { ICommonHeaderProperties } from "../services/api";
import { getAnimalsApi, IAnimals } from "../services/getAnimalsApi";
import { IUserData, IUserLogin, loginUsers } from "../services/loginUserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IUpdateUser, upDateUserApi } from "../services/updateUserApi";
import { getUsers } from "../services/getUser";
import { IUserRegister } from "../services/registerUserApi";
import { getAnimalsId } from "../services/getAnimalsId";
import { getSuppliesApi, ISupplies } from "../services/getSuppliesApi";
import { IData } from "../pages/Donate";
export interface IAuthContextProps {
  children: ReactNode;
}

interface IAuthContext {
  loginUser: (data: IUserLogin) => Promise<void>;
  loginRoute: () => void;
  listAnimals: IAnimals[];
  filteredAnimals: IAnimals[];
  setFilteredAnimals: Dispatch<SetStateAction<IAnimals[]>>;
  listSupplies: ISupplies[];
  user: IUserData;
  isLogged: boolean;
  loading: boolean;
  loginButton: boolean;
  setLoginButton: Dispatch<SetStateAction<boolean>>;
  donationButton: boolean;
  setDonationButton: Dispatch<SetStateAction<boolean>>;
  backProfile: () => void;
  adopted: boolean;
  setAdopted: Dispatch<SetStateAction<boolean>>;
  deleteAnimal: (id: string) => void;
  modalUpdateUser: boolean;
  setModalUpdateUser: Dispatch<SetStateAction<boolean>>;
  updateUser: (id: IUpdateUser) => Promise<void>;
  registerUser: (data: IUserRegister) => void;
  lisAnimalsUser: IAnimals[];
  registerPet: (data: {}) => void;
  isOpenModalSupplies: boolean;
  setIsShowModalPet: Dispatch<SetStateAction<boolean>>;
  isShowModalPet: boolean;
  setIsOpenModalSupplies: Dispatch<SetStateAction<boolean>>;
  isPageDonate: boolean;
  setIsPageDonate: Dispatch<SetStateAction<boolean>>;
  data: IData[];
  setData: Dispatch<SetStateAction<IData[]>>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const navigate = useNavigate();
  const [listAnimals, setListAnimals] = useState<IAnimals[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<IAnimals[]>([]);
  const [lisAnimalsUser, setLisAnimalsUser] = useState<IAnimals[]>([]);
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loginButton, setLoginButton] = useState<boolean>(true);
  const [donationButton, setDonationButton] = useState<boolean>(true);
  const [adopted, setAdopted] = useState<boolean>(true);
  const [modalUpdateUser, setModalUpdateUser] = useState<boolean>(false);
  const [isShowModalPet, setIsShowModalPet] = useState<boolean>(false);
  const [listSupplies, setListSupplies] = useState<ISupplies[]>([]);
  const [isOpenModalSupplies, setIsOpenModalSupplies] = useState(false);
  const [isPageDonate, setIsPageDonate] = useState<boolean>(false);
  const [data, setData] = useState<IData[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getAnimals().then((res) => res);
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@AuqMia:token");
      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `bearer ${token}`,
          } as ICommonHeaderProperties;

          api.get("/supplies").then((res) => setData(res.data));

          getUsers().then((res: any) => {
            setUser(res);
          });

          getAnimalsId().then((res) => setLisAnimalsUser(res));

          getSuppliesApi().then((res) => {
            setListSupplies(res);
          });

          setIsLogged(true);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [isShowModalPet, isOpenModalSupplies, isActive]);

  const loginUser = async (data: IUserLogin) => {
    loginUsers(data)
      .then((res) => {
        const { user: userResponse, accessToken } = res;
        api.defaults.headers = {
          Authorization: `bearer ${accessToken}`,
        } as ICommonHeaderProperties;

        setUser(userResponse);
        setIsLogged(true);

        toast.success("Login realizado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });

        navigate("/profile", { replace: true });

        localStorage.setItem("@AuqMia:token", accessToken);
        localStorage.setItem("@AuqMia:id", `${userResponse.id}`);
      })
      .catch((err) =>
        toast.error("Senha ou email incorreto.", {
          autoClose: 900,
          theme: "dark",
        })
      );
  };

  const backProfile = () => {
    navigate("/");
    localStorage.removeItem("@AuqMia:token");
    localStorage.removeItem("@AuqMia:id");
  };

  const loginRoute = () => {
    navigate("/login");
  };

  const getAnimals = async () => {
    await getAnimalsApi()
      .then((res) => {
        setListAnimals(res);
        setFilteredAnimals(res);
      })
      .catch((err) => console.log(err));
  };

  const deleteAnimal = async (id: string) => {
    const token = localStorage.getItem("@AuqMia:token");

    await api.delete(`animals/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getAnimals();
  };

  const registerPet = (data: {}) => {
    const token = localStorage.getItem("@AuqMia:token");
    const id = localStorage.getItem("@AuqMia:id");
    const req = {
      userId: id,
      ...data,
      city: user.address.city,
      state: user.address.state,
    };

    if (token) {
      api
        .post("/animals", req, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          toast.success("Animal cadastrado com sucesso!", {
            autoClose: 900,
            theme: "dark",
          });
          setIsShowModalPet(!isShowModalPet);
        })
        .catch((err) => {
          toast.error("Aconteceu algum erro, verifique os dados!", {
            autoClose: 900,
            theme: "dark",
          });
        });
    }
  };

  const updateUser = async (data: any) => {
    await upDateUserApi(data)
      .then((res: any) => {
        setUser(res);
        setModalUpdateUser(!modalUpdateUser);
        toast.success("Usuário atualizado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Erro ao atualizar!", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  const registerUser = (data: IUserRegister) => {
    const { confirm_password, state, district, city, ...restData } = data;
    const userData = {
      address: { state: state.toUpperCase(), city, district },
      ...restData,
    };
    api
      .post("/register", userData)
      .then((res) => {
        toast.success("Usuário cadastrado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível fazer o cadastro!", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        loginRoute,
        user,
        isLogged,
        loading,
        loginButton,
        setLoginButton,
        donationButton,
        setDonationButton,
        listAnimals,
        backProfile,
        adopted,
        setAdopted,
        deleteAnimal,
        modalUpdateUser,
        setModalUpdateUser,
        updateUser,
        registerUser,
        lisAnimalsUser,
        registerPet,
        setIsShowModalPet,
        isShowModalPet,
        listSupplies,
        isOpenModalSupplies,
        setIsOpenModalSupplies,
        isPageDonate,
        setIsPageDonate,
        filteredAnimals,
        setFilteredAnimals,
        data,
        setData,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
