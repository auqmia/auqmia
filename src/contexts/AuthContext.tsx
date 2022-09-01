import { createContext, ReactNode, useEffect, useState } from "react";
import api, { ICommonHeaderProperties } from "../services/api";
import { IUserData, IUserLogin, loginUsers } from "../services/loginUserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  loginUser: (data: IUserLogin) => Promise<void>;
  loginRoute: () => void;
  user: IUserData;
  isLogged: boolean;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const navegate = useNavigate();

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
        navegate("/profile", { replace: true });
        localStorage.setItem("@AuqMia:token", accessToken);
      })
      .catch((err) =>
        toast.error("Senha ou email incorreto", {
          autoClose: 900,
          theme: "dark",
        })
      );
  };

  const loginRoute = () => {
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ loginUser, loginRoute, user, isLogged, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
