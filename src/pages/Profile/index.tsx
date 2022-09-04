import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { MdOutlineEditNote } from "react-icons/md";
import { HeaderProfile, DivMain } from "./stelys";
import { RiAddFill } from "react-icons/ri";
import { Ul } from "../../components/Cards/style";
import logoAqMia from "../../assets/img/LogoAuqMia.png";
import Cards from "../../components/Cards";
import logout from "../../assets/logout.svg";
import donate from "../../assets/donate.svg";
import logo from "../../assets/img/Logo.png";
import ModalUpdateRegister from "../../components/ModalUpUser";

import RegisterPets from "../../components/modalRegisterPets";

const Profile = () => {
  const { loading, isLogged, user, backProfile, setModalUpdateUser } =
    useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);

  if (loading) return <div>Carregando...</div>;

  return isLogged ? (
    <>
      <HeaderProfile>
        <div className="div-header">
          <figure>
            <img className="logo" src={logo} alt="Logo" />
            <img className="big-logo" src={logoAqMia} alt="logo" />
          </figure>
          <div className="subHeader-title">
            <h1>Minha raça favorita é: adotada.</h1>
          </div>
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
          <main className="main-profile">
            <div className="subHeader-title">
              <h1>Minha raça favorita é: adotada.</h1>
            </div>
            <div className="div-container-info">
              <div className="div-info">
                <figure>
                  <img
                    className="img-profile"
                    src={user.url}
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
                <p>Cidade:</p>
              </div>
              <div className="data-user">
                <p className="name-user">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lobortis id eros at auctor. Praesent in nibh et sapien
                  luctus consectetur. Pellentesque efficitur sapien lectus,
                  posuere laoreet urna sagittis in. Sed placerat dignissim
                  tortor nec gravida.”
                </p>
                {/*   <div className="div-email">
                  <p className="name-user">{user.email}</p>
                  <MdOutlineEditNote className="icon-edit" />
                </div> */}
                <p className="name-user">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lobortis id eros at auctor. Praesent in nibh et sapien
                  luctus consectetur. Pellentesque efficitur sapien lectus,
                  posuere laoreet urna sagittis in. Sed placerat dignissim
                  tortor nec gravida.”
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
                  onClick={() => setIsActive(!isActive)}
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
                <button className="button-requests">
                  <RiAddFill className="icon-button" />
                </button>
                <p className="need-help">Preciso de Ajuda</p>
              </div>
            </div>
          </main>
        </div>
      </DivMain>

      {isActive && (
        <RegisterPets isActive={isActive} setIsActive={setIsActive} />
      )}

      <ModalUpdateRegister />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Profile;
