import api from "./api";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserData {
  email: string;
  password: string;
  birthaday: string;
  user_type: string;
  address: {
    state: string;
    city: string;
    district: string;
  };
  picture: string;
  bio: string;
  name: string;
  id: string;
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
