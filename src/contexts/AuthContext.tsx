import { createContext, ReactNode, useEffect, useState } from "react";
import api, { ICommonHeaderProperties } from "../services/api";
import { IUserData, IUserLogin, loginUsers } from "../services/loginUserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IUserRegister } from "../services/registerUserApi";

export interface IAuthContextProps {
  children: ReactNode;
}

interface IAuthContext {
  loginUser: (data: IUserLogin) => Promise<void>;
  user: IUserData;
  isLogged: boolean;
  loading: boolean;
  registerUser: (data: IUserRegister) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@AuqMia:token");
      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `bearer ${token}`,
          } as ICommonHeaderProperties;
          setIsLogged(true);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const loginUser = async (data: IUserLogin) => {
    loginUsers(data)
      .then((res) => {
        console.log(res);
        const { user: userReponse, accessToken } = res;
        api.defaults.headers = {
          Authorization: `bearer ${accessToken}`,
        } as ICommonHeaderProperties;
        setUser(userReponse);
        toast.success("Usuário logado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
        navigate("/profile", { replace: true });
        localStorage.setItem("@AuqMia:token", accessToken);
      })
      .catch((err) =>
        toast.error("Senha ou email incorreto.", {
          autoClose: 900,
          theme: "dark",
        })
      );
  };

  const registerUser = (data: IUserRegister) => {
    const { confirm_password, ...userData } = data;
    api
      .post("/register", userData)
      .then((res) => {
        toast.success("Usuário registrado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível fazer o cadastro.", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, user, isLogged, loading, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
