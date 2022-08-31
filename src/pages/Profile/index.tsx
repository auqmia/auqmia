import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { DivTeste } from "./stelys";

const Profile = () => {
  const { loading, isLogged } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return isLogged ? (
    <DivTeste>
      <h1>Eu sou o Profife</h1>
    </DivTeste>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Profile;
