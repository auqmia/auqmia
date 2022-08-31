import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IUserLogin, loginUsers } from "../services/loginUserApi";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  loginUser: (data: IUserLogin) => Promise<void>;
  loginRoute: () => void;
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const navigate = useNavigate();

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

  return (
    <AuthContext.Provider value={{ loginUser, loginRoute }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
