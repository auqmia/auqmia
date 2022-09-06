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

  const { state, district, city, ...restData } = params;
  const userData = {
    address: { state: state.toUpperCase(), city, district },
    ...restData,
  };

  const { data } = await api.patch(`/users/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
