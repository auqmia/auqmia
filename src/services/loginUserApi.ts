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
export interface IUserLoginResponse {
  accessToken: string;
  user: IUserData;
}

export async function loginUsers(
  params: IUserLogin
): Promise<IUserLoginResponse> {
  const { data } = await api.post<IUserLoginResponse>("login", params);

  return data;
}
