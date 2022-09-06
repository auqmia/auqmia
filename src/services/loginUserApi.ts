import api from "./api";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  birthday: string;
  picture: string;
  address: {
    district: string;
    city: string;
    state: string;
  };
  user_type: string;
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
