import { createContext, ReactNode, useState } from "react";
import api, { ICommonHeaderProperties } from "../services/api";
import { IUserData, IUserLogin, loginUsers } from "../services/loginUserApi";
import { toast } from "react-toastify";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  loginUser: (data: IUserLogin) => Promise<void>;
  user: IUserData;
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);

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

        localStorage.setItem("@AuqMia:token", accessToken);
      })
      .catch((err) =>
        toast.error("Senha ou email incorreto", {
          autoClose: 900,
          theme: "dark",
        })
      );
  };
  return (
    <AuthContext.Provider value={{ loginUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
