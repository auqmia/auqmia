import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

import { Input } from "../../components/Input/style";
import api from "../../services/api";

interface IActive {
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const RegisterPets = ({ isActive, setIsActive}: IActive) => {
  const token = localStorage.getItem("@AuqMia:token");
  const id = localStorage.getItem("@AuqMia:id");

  const {register, handleSubmit} = useForm();

  function onSubmit(data: {}) {
    const req = { userID: id, ...data };

    if(token) {
      api.post("/animals", req, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  return (
    <div>
      <div>
        <p>Cadastrar Pet</p>
        <button onClick={() => setIsActive(!isActive)}><AiOutlineClose /></button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
         <Input id="name" placeholder="Digite um nome" { ...register("name") } />

         <select id="type" { ...register("type") } >
            <option value="Dog">Cachorro</option>
            <option value="Cat">Gato</option>
          </select>

          <select id="genre" { ...register("genre") } >
            <option value="M">Macho</option>
            <option value="F">Fêmea</option>
          </select>

          <Input id="url" placeholder="Digite a url da foto" { ...register("url") } />
          <Input id="age" placeholder="Digite a idade" { ...register("age") } />
          <Input id="description" placeholder="Digite uma descrição" { ...register("description") } />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPets;