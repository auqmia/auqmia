import api from "./api";
/* import { IUserData } from "./loginUserApi"; */

export async function getUsersAll(): Promise<any> {
  const token = localStorage.getItem("@AuqMia:token");
  const { data } = await api.get<any>("users", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
