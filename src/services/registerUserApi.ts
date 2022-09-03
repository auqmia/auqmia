import axios from "axios";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  birthday: string;
  picture: string;
  district: string;
  city: string;
  state: string;
  user_type: string;
}

export interface IStatesData {
  id: number;
  sigla: string;
  nome: string;
  região: object;
}

export interface ISelectOptions {
  value: string;
  label: string;
}

export const statesApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/",
  timeout: 5000,
});
