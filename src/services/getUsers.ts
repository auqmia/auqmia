import api from "./api";

export async function getUsersAll(): Promise<any> {
  const token = localStorage.getItem("@AuqMia:token");
  const { data } = await api.get<any>("users", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
