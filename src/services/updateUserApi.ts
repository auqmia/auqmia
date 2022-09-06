import api from "./api";

export interface IUpdateUser {
  name: string;
  email: string;
  picture: string;
  birthday: string;
  bio: string;
  district: string;
  city: string;
  state: string;
}

export async function upDateUserApi(value: IUpdateUser) {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const { state, district, city, ...restData } = value;
  const userData = {
    address: { state: state.toUpperCase(), city, district },
    ...restData,
  };

  const { data } = await api.patch(`/users/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
