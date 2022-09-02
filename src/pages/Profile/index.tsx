import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { HeaderProfile, DivMain } from "./stelys";
import logo from "../../assets/img/Logo.png";

const Profile = () => {
  const { loading, isLogged, user } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return isLogged ? (
    <>
      <HeaderProfile>
        <div className="div-header">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="div-buttons">
            <button className="button-logout">Back</button>
            <button className="button-help">
              <FaHandHoldingHeart />
            </button>
          </div>
        </div>
      </HeaderProfile>
      <DivMain>
        <div className="div-wrap">
          <div className="subHeader-title">
            <h1>Minha raça favorita é: adotada.</h1>
          </div>
          <main className="main-profile">
            <figure>
              <img src={user.url} alt="img profile" />
            </figure>
            <div className="data-user">
              <div>
                <h2 className="name-user">{user.name}</h2>
                <p className="name-user">{user.location}</p>
              </div>
              <p className="name-user">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lobortis id eros at auctor. Praesent in nibh et sapien
                luctus consectetur. Pellentesque efficitur sapien lectus,
                posuere laoreet urna sagittis in. Sed placerat dignissim tortor
                nec gravida.”
              </p>
              <div className="div-email">
                <p className="name-user">{user.email}</p>
                <MdOutlineEditNote className="icon-edit" />
              </div>
            </div>
            <div className="div-more-pets">
              <button className="button-more-pets"></button>
              <h3 className="title-more-pets">Colocar para Adoção</h3>
            </div>
          </main>
        </div>
      </DivMain>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Profile;
