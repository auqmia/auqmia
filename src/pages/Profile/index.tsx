import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { MdOutlineEditNote } from "react-icons/md";
import { HeaderProfile, DivMain } from "./stelys";
import { RiAddFill } from "react-icons/ri";
import { Ul } from "../../components/Cards/style";
import Cards from "../../components/Cards";
import logout from "../../assets/logout.svg";
import donate from "../../assets/donate.svg";
import logo from "../../assets/img/Logo.png";

const Profile = () => {
  const { loading, isLogged, user, backProfile } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return isLogged ? (
    <>
      <HeaderProfile>
        <div className="div-header">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="div-buttons">
            <button className="button-logout" onClick={() => backProfile()}>
              <img className="button-logout" src={logout} alt="" />
            </button>
            <button className="button-help">
              <img className="button-help" src={donate} alt="" />
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
              <img className="img-profile" src={user.url} alt="img profile" />
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
              <button className="button-more-pets">
                <RiAddFill className="icon-button" />
              </button>
              <h3 className="title-more-pets">Colocar para Adoção</h3>
            </div>
            <div>
              <Ul className="ul-profile">
                <Cards />
              </Ul>
            </div>
            <div className="div-more-pets">
              <button className="button-requests">
                <RiAddFill className="icon-button" />
              </button>
              <p className="need-help">Preciso de Ajuda</p>
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
