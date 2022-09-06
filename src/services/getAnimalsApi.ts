import api from "./api";

export interface IAnimals {
  id: string;
  name: string;
  type: string;
  url: string;
  genre: string;
  description: string;
}

export async function getAnimalsApi(): Promise<IAnimals[]> {
  const { data } = await api.get<IAnimals[]>("/animals");

  return data;
}
