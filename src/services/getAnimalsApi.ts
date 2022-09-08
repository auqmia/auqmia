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

export async function getAnimalsApi(): Promise<IAnimals[]> {
  const { data } = await api.get<IAnimals[]>("/animals");

  return data;
}

export async function getThreeAnimals(): Promise<IAnimals[]> {
  const { data } = await api.get("/animals?_limit=2");
  return data;
}
