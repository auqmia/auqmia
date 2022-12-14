import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { IAnimals } from "../../services/getAnimalsApi";

function Cards() {
  const navigate = useNavigate();

  const { listAnimals, deleteAnimal, adopted, setAdopted, filteredAnimals } =
    useContext(AuthContext);

  const deleteCard = (id: string) => {
    const token = localStorage.getItem("@AuqMia:token");

    const list = document.querySelector(`.list${id}`);

    if (token) {
      setAdopted(!adopted);

      list?.classList.add("remove-card");

      toast.success("Solicitação de adoção enviada com sucesso!!", {
        autoClose: 900,
        theme: "dark",
      });

      deleteAnimal(id);
    } else {
      navigate("/login", { replace: true });
      toast.error("Você precisa fazer o login para adotar.", {
        autoClose: 900,
        theme: "dark",
      });
    }
  };

  return (
    <>
      {filteredAnimals.length === 0
        ? listAnimals.map((elem: IAnimals) => (
            <li key={elem.id} className={`list${elem.id}`}>
              <h1>{elem.name}</h1>
              <figure>
                <img src={elem.url} alt="foto" />
              </figure>
              <div>
                <h4>
                  <span>Animal:</span> {elem.type}
                </h4>
                <h5>
                  <span>Gênero:</span> {elem.genre}
                </h5>
                <h6>
                  <span>Descrição:</span> {elem.description}
                </h6>
              </div>
              <button onClick={() => deleteCard(elem.id)}>Adotar</button>
            </li>
          ))
        : filteredAnimals.map((elem: IAnimals) => (
            <li key={elem.id} className={`list${elem.id}`}>
              <h1>{elem.name}</h1>
              <figure>
                <img src={elem.url} alt="foto" />
              </figure>
              <div>
                <h4>
                  <span>Animal:</span> {elem.type}
                </h4>
                <h5>
                  <span>Gênero:</span> {elem.genre}
                </h5>
                <h6>
                  <span>Descrição:</span> {elem.description}
                </h6>
              </div>
              <button onClick={() => deleteCard(elem.id)}>Adotar</button>
            </li>
          ))}
    </>
  );
}

export default Cards;
