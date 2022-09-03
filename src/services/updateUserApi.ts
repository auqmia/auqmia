import api from "./api";

export interface IUpdateUser {
    nome: string;
    email: string;
    senha: string;
    bairro: string;
    cidade: string;
    estado: string;
}

export async function upDateUserApi(value:IUpdateUser) {
    const token = localStorage.getItem("@AuqMia:token");
    const id = localStorage.getItem("@AuqMia:id");
    const {data} = await api.patch(`/users/${id}`, value, {headers: { Authorization: `Bearer ${token}` }});

    return data
    
}