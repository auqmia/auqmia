import Logo from "../../assets/img/Logo.png";
import LogoAuqMia from "../../assets/img/LogoAuqMia.png";
import loginButton from "../../assets/img/ButtonsImg/loginButton.png";
import donationButton from "../../assets/img/ButtonsImg/donationButton.png";
import { HeaderMain } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
function Header() {
  const { loginRoute } = useContext(AuthContext);
  return (
    <HeaderMain>
      <div className="logo-div">
        <img className="logo-AuqMia" src={LogoAuqMia} alt="LogoAuqMia" />
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div>
        <p>Mensagem que eu não sei!!</p>
      </div>
      <div className="buttons-div">
        <button className="login-button" type="button" onClick={() => loginRoute()}>
          <img src={loginButton} alt="Login Button" />
        </button>
        <button className="donation-button">
          <img src={donationButton} alt="Donation Button" />
        </button>
      </div>
    </HeaderMain>
  );
}

export default Header;
