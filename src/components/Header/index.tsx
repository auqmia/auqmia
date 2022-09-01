import Logo from "../../assets/img/Logo.png";
import LogoAuqMia from "../../assets/img/LogoAuqMia.png";
import loginButtonImg from "../../assets/img/ButtonsImg/loginButton.png";
import newLoginButtonImg from "../../assets/img/ButtonsImg/newLoginButton.png";
import donationButtonImg from "../../assets/img/ButtonsImg/donationButton.png";
import newDonationButtonImg from "../../assets/img/ButtonsImg/newDonationButton.png";
import { HeaderMain } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
function Header() {
  const {
    loginRoute,
    loginButton,
    setLoginButton,
    donationButton,
    setDonationButton,
  } = useContext(AuthContext);
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
        {loginButton ? (
          <button
            className="login-button"
            onClick={() => setLoginButton(!loginButton)}
          >
            <img src={loginButtonImg} alt="Login Button" />
          </button>
        ) : (
          <button
            className="new-login-button"
            onClick={() => loginRoute()}
          >
            <img src={newLoginButtonImg} alt="Login Button" />
          </button>
        )}

        {donationButton ? <button className="donation-button"
        onClick={() => setDonationButton(!donationButton)}>
          <img src={donationButtonImg} alt="Donation Button" />
        </button>
         : 
           <button className="new-donation-button"
        /* onClick={() => setDonationButton(!donationButton)} */>
          <img src={newDonationButtonImg} alt="Donation Button" />
        </button>}

        
      </div>
    </HeaderMain>
  );
}

export default Header;
