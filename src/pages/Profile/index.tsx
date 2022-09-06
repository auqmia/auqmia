import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import { HeaderProfile, DivMain } from "./stelys";
import { RiAddFill } from "react-icons/ri";
import { Ul } from "../../components/Cards/style";
import logoAqMia from "../../assets/img/LogoAuqMia.png";

import logout from "../../assets/logout.svg";
import donate from "../../assets/donate.svg";
import logo from "../../assets/img/Logo.png";
import ModalUpdateRegister from "../../components/ModalUpUser";
import { FaUserEdit, FaChevronDown, FaChevronUp } from "react-icons/fa";

import RegisterPets from "../../components/modalRegisterPets";
import RegisterSupplies from "../../components/modalRegisterSupplies";

const Profile = () => {
  const {
    loading,
    isLogged,
    user,
    backProfile,
    setModalUpdateUser,
    lisAnimalsUser,
    setIsShowModalPet,
    isShowModalPet,
  } = useContext(AuthContext);

  const [isActiveModalSupplies, setIsActiveModalSupplies] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

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
                    src={user?.picture}
                    alt="img profile"
                  />
                </figure>
                <div className="div-name-location">
                  <h2 className="name-user">{user?.name}</h2>
                  <div className="div-align">
                    <h3 className="name-user">
                      {`${user.address?.city}, ${user.address?.state}`}
                    </h3>
                    {!isShowInfo ? (
                      <FaChevronDown
                        onClick={() => setIsShowInfo(!isShowInfo)}
                      />
                    ) : (
                      <FaChevronUp onClick={() => setIsShowInfo(!isShowInfo)} />
                    )}
                  </div>
                </div>
              </div>

              {isShowInfo && (
                <div className="div-user-info">
                  <div className="div-align-icon">
                    <p>Email: {user?.email}</p>

                    <FaUserEdit
                      onClick={() => setModalUpdateUser(true)}
                      className="icon--edit"
                    />
                  </div>
                  <p>Cidade: {user.address?.city}</p>
                  <p>Estado: {user.address?.state}</p>
                  <p>Bairro: {user.address?.district}</p>
                </div>
              )}
              <div className="data-user">
                <p className="name-user">{user?.bio}</p>
              </div>
            </div>

            <div className="container-pets">
              <div className="div-more-pets">
                <button
                  onClick={() => setIsShowModalPet(!isShowModalPet)}
                  className="button-more-pets"
                >
                  <RiAddFill className="icon-button" />
                </button>
                <h3 className="title-more-pets">Colocar para Adoção</h3>
              </div>
              <div className="container-ul">
                <Ul className="ul-profile">
                  {lisAnimalsUser?.map((elem) => (
                    <li key={elem.id} className={`list${elem.id}`}>
                      <h1>{elem.name}</h1>
                      <figure>
                        <img src={elem.url} alt="foto" />
                      </figure>
                      <div>
                        <h5>Animal: {elem.type}</h5>
                        <span>Gênero: {elem.genre}</span>
                        <p>Descrição: {elem.description}</p>
                      </div>
                      <button>Adotar</button>
                    </li>
                  ))}
                </Ul>
              </div>
              <div className="div-more-pets">
                <button
                  className="button-requests"
                  onClick={() =>
                    setIsActiveModalSupplies(!isActiveModalSupplies)
                  }
                >
                  <RiAddFill className="icon-button" />
                </button>
                <p className="need-help">Preciso de Ajuda</p>
              </div>
            </div>
          </main>
        </div>
      </DivMain>

      {isShowModalPet && <RegisterPets />}

      {isActiveModalSupplies && (
        <RegisterSupplies
          isActive={isActiveModalSupplies}
          setIsActive={setIsActiveModalSupplies}
        />
      )}

      <ModalUpdateRegister />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Profile;
