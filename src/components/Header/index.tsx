import logoHeader from "../../assets/img/logoHeader.png";
import auqMia from "../../assets/img/auqMia.png";
import { HeaderMain } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
function Header() {
    const {loginRoute} = useContext(AuthContext)
  return (
    <HeaderMain>
      <div>
        <img src={logoHeader} alt="logo" />
        <img src={auqMia} alt="title" />
      </div>
      <div>
        <p>Mensagem que eu não sei!!</p>
      </div>
      <div>
        <button type="button" onClick={() => loginRoute()}>Login</button>
        <button>Quero ajudar</button>
      </div>
    </HeaderMain>
  );
}

export default Header;
