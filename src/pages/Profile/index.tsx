import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HeaderProfile } from "./style";
import logoAqMia from "../../assets/img/LogoAuqMia.png";
import logout from "../../assets/logout.svg";
import donate from "../../assets/donate.svg";
import logo from "../../assets/img/Logo.png";
import ModalUpdateRegister from "../../components/ModalUpUser";

import RegisterSupplies from "../../components/modalRegisterSupplies";
import ProfileForAdoption from "../ProfileForAdoption";
import ProfileAdoptPet from "../ProfileAdoptPet";

const Profile = () => {
  const {
    loading,
    isLogged,
    user,
    backProfile,
  } = useContext(AuthContext);

  const [isActiveModalSupplies, setIsActiveModalSupplies] = useState(false);

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

      {/* {isShowModalPet && <RegisterPets />} */}


      {user.user_type === "forAdoption" ? (
        <ProfileForAdoption />
      ) : (
        <ProfileAdoptPet />
      )}

      {/* {isActiveModalPet && (
        <RegisterPets
          isActive={isActiveModalPet}
          setIsActive={setIsActiveModalPet}
        />
      )} */}

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
