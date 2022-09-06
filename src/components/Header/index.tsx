import Logo from "../../assets/img/Logo.png";
import LogoAuqMia from "../../assets/img/LogoAuqMia.png";
import footprints from "../../assets/img/footprints.png";
import { ButtonHoverDonation, ButtonHoverLogin, HeaderMain } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BiLogInCircle } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

function Header() {
  const {
    loginRoute,
  } = useContext(AuthContext);
  return (
    <HeaderMain>
      <section>
        <div className="logo-div">
          <img className="logo-AuqMia" src={LogoAuqMia} alt="LogoAuqMia" />
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="mid-div">
          <h1>
            Respeitar os animais é uma obrigação, amá-los é um privilégio.
          </h1>
          <figure className="footprints-figure">
            <img src={footprints} alt="Pegadas" className="footprints-img" />
          </figure>
        </div>
        <div className="buttons-div">
          <ButtonHoverLogin onClick={() => loginRoute()}>
            <p className="login">Login</p>
            <BiLogInCircle className="form__button--icon" />
          </ButtonHoverLogin>

          <ButtonHoverDonation onClick={() => loginRoute()}>
            <p className="donation">Quero ajudar</p>
            <GiReceiveMoney className="form__button--icon" />
          </ButtonHoverDonation>
        </div>
      </section>
    </HeaderMain>
  );
}

export default Header;
