import api from "./api";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserData {
  url: string;
  email: string;
  id: string;
  name: string;
  location: string;
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
