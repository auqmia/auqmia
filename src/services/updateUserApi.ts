import api from "./api";

export interface IUpdateUser {
  name: string;
  email: string;
  password: string;
  picture: string;
  address: {
    state: string;
    city: string;
    district: string;
  };
  birthday: string;
  bio: string;
}

export async function upDateUserApi(params: IUpdateUser) {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const { data } = await api.patch(`/users/${id}`, params, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
