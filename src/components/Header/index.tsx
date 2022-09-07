import Logo from "../../assets/img/Logo.png";
import LogoAuqMia from "../../assets/img/LogoAuqMia.png";
import { ButtonHoverDonation, ButtonHoverLogin, HeaderMain } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BiHomeHeart, BiLogInCircle } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const { loginRoute, isPageDonate, setIsPageDonate } = useContext(AuthContext);

  const token = localStorage.getItem("@AuqMia:token");

  const logout = () => {
    navigate("/", { replace: true });

    localStorage.clear();
  };

  const donate = () => {
    if (token) {
      navigate("/donate", { replace: true });
      setIsPageDonate(!isPageDonate);
    } else {
      navigate("/login", { replace: true });
    }
  };

  const home = () => {
    navigate("/", { replace: true });
    setIsPageDonate(!isPageDonate);
  };

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
        </div>
        <div className="buttons-div">
          {token ? (
            <ButtonHoverLogin onClick={() => logout()}>
              <p className="logout">Logout</p>
              <ImExit className="form__button--icon" />
            </ButtonHoverLogin>
          ) : (
            <ButtonHoverLogin onClick={() => loginRoute()}>
              <p className="login">Login</p>
              <BiLogInCircle className="form__button--icon" />
            </ButtonHoverLogin>
          )}

          {isPageDonate ? (
            <ButtonHoverDonation onClick={() => donate()}>
              <p className="donation">Quero ajudar</p>
              <FaHandHoldingHeart className="form__button--icon" />
            </ButtonHoverDonation>
          ) : (
            <ButtonHoverDonation onClick={() => home()}>
              <p className="home">Home</p>
              <BiHomeHeart className="form__button--icon" />
            </ButtonHoverDonation>
          )}
        </div>
      </section>
    </HeaderMain>
  );
}

export default Header;
