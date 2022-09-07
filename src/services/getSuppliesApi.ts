import api from "./api";

export interface ISupplies {
  id: string;
  product: string;
  quantity: string;
}

export async function getSuppliesApi(): Promise<ISupplies[]> {
  const id = localStorage.getItem("@AuqMia:id");
  const { data } = await api.get<ISupplies[]>(`/supplies?userId=${id}`);

  return data;
}
