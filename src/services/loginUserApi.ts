import api from "./api";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserData {
  email: string;
  id: number;
}
export interface IUserLoginrResponse {
  accessToken: string;
  user: IUserData;
}

export async function loginUsers(
  params: IUserLogin
): Promise<IUserLoginrResponse> {
  const { data } = await api.post<IUserLoginrResponse>("login", params);

  return data;
}
