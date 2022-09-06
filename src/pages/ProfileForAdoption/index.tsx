import { DivMain } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MdOutlineEditNote } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { Ul } from "../../components/Cards/style";
import Cards from "../../components/Cards";

const ProfileForAdoption = () => {
  const { user, setModalUpdateUser } = useContext(AuthContext);

  const [isActiveModalPet, setIsActiveModalPet] = useState(false);
  const [isActiveModalSupplies, setIsActiveModalSupplies] = useState(false);

  return (
    <DivMain>
      <div className="div-wrap">
        <main className="main-profile">
          <div className="subHeader-title">
            <h1>Minha raça favorita é: adotada.</h1>
          </div>
          <div className="div-container-info">
            <div className="div-info">
              <figure>
                <img
                  className="img-profile"
                  src={user.picture}
                  alt="img profile"
                />
              </figure>
              <div className="div-name-location">
                <h2 className="name-user">{user.name}</h2>
              </div>
            </div>

            <div className="info">
              <p>Email:</p>
              <p>Cidade:</p>
              <p>Estado:</p>
              <p></p>
            </div>
            <div className="data-user">
              <p className="name-user">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lobortis id eros at auctor. Praesent in nibh et sapien
                luctus consectetur. Pellentesque efficitur sapien lectus,
                posuere laoreet urna sagittis in. Sed placerat dignissim tortor
                nec gravida."
              </p>
            </div>
            <div className="div-email">
              <p className="name-user">{user.email}</p>
              <button onClick={() => setModalUpdateUser(true)}>
                <MdOutlineEditNote className="icon-edit" />
              </button>
            </div>
          </div>

          <div className="container-pets">
            <div className="div-more-pets">
              <button
                onClick={() => setIsActiveModalPet(!isActiveModalPet)}
                className="button-more-pets"
              >
                <RiAddFill className="icon-button" />
              </button>
              <h3 className="title-more-pets">Colocar para Adoção</h3>
            </div>
            <div className="container-ul">
              <Ul className="ul-profile">
                <Cards />
              </Ul>
            </div>
            <div className="div-more-pets">
              <button
                className="button-requests"
                onClick={() => setIsActiveModalSupplies(!isActiveModalSupplies)}
              >
                <RiAddFill className="icon-button" />
              </button>
              <p className="need-help">Preciso de Ajuda</p>
            </div>
          </div>
        </main>
      </div>
    </DivMain>
  );
};

export default ProfileForAdoption;
