import api from "./api";

export interface IAnimals {
  id: string;
  name: string;
  type: string;
  url: string;
  genre: string;
  description: string;
}

export async function getAnimalsId(): Promise<IAnimals[]> {
  const id = localStorage.getItem("@AuqMia:id");
  const { data } = await api.get<IAnimals[]>(`/animals?userID=${id}`);

  return data;
}
