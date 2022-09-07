import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getAnimalsUserId } from "../../services/getAnimalsId";
import { getUsersAll } from "../../services/getUsers";
import { IUserData } from "../../services/loginUserApi";
import Select from "../Select";
import { FilterDiv } from "./style";

interface IAnimals {
  userId: string;
  id: string;
  name: string;
  type: string;
  url: string;
  genre: string;
  description: string;
}

const LocationFilter = () => {
  const [usersStates, setUsersStates] = useState<string[]>([] as string[]);
  const [usersCities, setUsersCities] = useState<string[]>([] as string[]);
  const [users, setUsers] = useState<IUserData[]>([] as IUserData[]);
  const [teste, setTeste] = useState<IAnimals[]>([] as IAnimals[]);
  const [inputState, setInputState] = useState<string>("");
  const [inputCity, setInputCity] = useState<string>("");

  const { listAnimals } = useContext(AuthContext);

  useEffect(() => {
    getUsersAll().then((res: IUserData[]) => {
      const states = res.map(({ address: { state } }) => state);
      const cities = res.map(({ address: { city } }) => city);
      setUsers(res);
      setUsersCities(cities);
      setUsersStates(states);
    });
  }, []);

  async function submit(event: any) {
    event.preventDefault();
    if (inputCity === "Selecione uma opção:") {
      setInputCity("");
    } else if (inputState === "Selecione uma opção:") {
      setInputState("");
    }
    if (inputCity === "") {
      const filteredUsers = users.filter(
        ({ address: { state } }) => state === inputState
      );

      filteredUsers.forEach(({ id }) => {
        getAnimalsUserId(id).then((res) => setTeste([...res, ...teste]));
      });

      console.log(teste);
    }
  }

  return (
    <FilterDiv>
      <form onSubmit={submit}>
        <Select
          options={["Selecione uma opção:", ...usersStates]}
          label="Estados"
          onClick={(e) => setInputState(e.target.id)}
        />
        <Select
          options={["Selecione uma opção:", ...usersCities]}
          label="Cidades"
          onClick={(e) => setInputCity(e.target.id)}
        />

        <button type="submit">ok</button>
      </form>
    </FilterDiv>
  );
};

export default LocationFilter;
