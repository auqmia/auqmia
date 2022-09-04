import api from "./api";

export interface IUpdateUser {
  name: string;
  email: string;
  password: string;
  url: string;
  /* bairro: string;
  cidade: string;
  estado: string; */
}

export async function upDateUserApi(value: IUpdateUser) {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");
  const { data } = await api.patch(`/users/${id}`, value, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
