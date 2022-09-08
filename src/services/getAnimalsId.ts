import api from "./api";

export interface IAnimals {
  userId: string;
  id: string;
  name: string;
  type: string;
  url: string;
  genre: string;
  description: string;
  state: string;
  city: string;
}

export async function getAnimalsId(): Promise<IAnimals[]> {
  const id = localStorage.getItem("@AuqMia:id");
  const { data } = await api.get<IAnimals[]>(`/animals?userId=${id}`);

  return data;
}

export async function getAnimalsUserId(id: string): Promise<IAnimals[]> {
  const { data } = await api.get<IAnimals[]>(`/animals?userId=${id}`);

  return data;
}
