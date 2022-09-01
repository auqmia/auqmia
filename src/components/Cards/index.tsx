import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IAnimals } from "../../services/getAnimalsApi";

function Cards() {
  const { listAnimals } = useContext(AuthContext);
  return (
    <div>
      {listAnimals.map((elem: IAnimals) => (
        <div key={elem.id}>
          <p>{elem.name}</p>
          <img src={elem.url} alt="foto" />
          <p>{elem.type}</p>
          <p>{elem.genre}</p>
          <p>{elem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
