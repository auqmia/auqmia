import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileForAdoption from "../ProfileForAdoption";
import ProfileAdoptPet from "../ProfileAdoptPet";
import RegisterPets from "../../components/modalRegisterPets";
import Header from "../../components/Header";

const Profile = () => {
  const { loading, isLogged, user, isShowModalPet } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return isLogged ? (
    <>
      <Header />

      {isShowModalPet && <RegisterPets />}

      {user.user_type === "forAdoption" ? (
        <ProfileForAdoption />
      ) : (
        <ProfileAdoptPet />
      )}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Profile;
