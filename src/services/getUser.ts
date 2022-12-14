import api from "./api";
/* import { IUserData } from "./loginUserApi"; */

export async function getUsers(): Promise<any> {
  const id = localStorage.getItem("@AuqMia:id");
  const token = localStorage.getItem("@AuqMia:token");
  const { data } = await api.get<any>(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
