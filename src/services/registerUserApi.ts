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

export interface IStatesOptions {
  id: number;
  sigla: string;
  nome: string;
  região: object;
}
