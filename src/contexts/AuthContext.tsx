import { createContext, ReactNode } from "react";
import { IUserLogin, loginUsers } from "../services/loginUserApi";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  loginUser: (data: IUserLogin) => Promise<void>;
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const loginUser = async (data: IUserLogin) => {
    loginUsers(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <AuthContext.Provider value={{ loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
