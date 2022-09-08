import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getUsersAll } from "../../services/getUsers";
import { IUserData } from "../../services/loginUserApi";
import Select from "../Select";
import { FilterDiv } from "./style";
import { BiSearchAlt } from "react-icons/bi";

const LocationFilter = () => {
  const [usersStates, setUsersStates] = useState<string[]>([] as string[]);
  const [usersCities, setUsersCities] = useState<string[]>([] as string[]);
  const [inputState, setInputState] = useState<string>("");
  const [inputCity, setInputCity] = useState<string>("");

  const { listAnimals, setFilteredAnimals } = useContext(AuthContext);

  useEffect(() => {
    getUsersAll().then((res: IUserData[]) => {
      const states = res.map(({ address: { state } }) => state);
      const cities = res.map(({ address: { city } }) => city);
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

    if (inputCity == "" && inputState == "") {
      setFilteredAnimals(listAnimals);
    } else if (inputCity != "" && inputState != "") {
      const filter = listAnimals.filter(
        ({ city, state }) => city === inputCity && state === inputState
      );
      setFilteredAnimals(filter);
    } else if (inputCity == "") {
      const filter = listAnimals.filter(({ state }) => state === inputState);
      setFilteredAnimals(filter);
    } else if (inputState == "") {
      const filter = listAnimals.filter(({ city }) => city === inputCity);
      setFilteredAnimals(filter);
    }
  }

  return (
    <FilterDiv>
      <h2 className="filter__title">Procurar pela localização</h2>
      <form className="filter__form" onSubmit={submit}>
        <Select
          options={["Selecione um estado...", ...usersStates]}
          label="Estados"
          showLabel={false}
          onClick={(e) => setInputState(e.target.id)}
        />
        <Select
          options={["Selecione uma cidade...", ...usersCities]}
          label="Cidades"
          showLabel={false}
          onClick={(e) => setInputCity(e.target.id)}
        />

        <button className="filter__button" type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </FilterDiv>
  );
};

export default LocationFilter;
