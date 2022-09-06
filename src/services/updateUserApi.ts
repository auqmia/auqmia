import api from "./api";
/* import { IUserData } from "./loginUserApi"; */

export interface IUpdateUser {
  name: string;
  email: string;
  password: string;
  picture: string;
  /* bairro: string;
  cidade: string;
  estado: string; */
}

export async function upDateUserApi(params: IUpdateUser) {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");
  const { data } = await api.patch<IUpdateUser>(`/users/${id}`, params, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
