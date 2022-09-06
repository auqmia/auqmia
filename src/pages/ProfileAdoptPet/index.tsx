import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { Main } from "./style";
import { Link } from "react-router-dom";

const ProfileAdoptPet = () => {
  const { user, setModalUpdateUser } = useContext(AuthContext);
  const { name, picture, email, birthday, address, bio } = user;

  return (
    <Main>
      <div className="mobile__title">
        <h1>Minha raça favorita é: adotada.</h1>
      </div>

      <div className="user__info">
        <div className="info__main">
          <figure className="info__figure">
            <img className="info__img" src={picture} alt={`${name}`} />
          </figure>

          <div className="info__name">
            <h2>{name}</h2>
            <p>
              {address.city}, {address.state}
            </p>
          </div>
        </div>

        <div className="info__more">
          <MdOutlineEditNote />
          <p>Email: {email}</p>
          <p>Data de nascimento: {birthday}</p>
          <p>Estado: {address.state}</p>
          <p>Cidade: {address.city}</p>
          <p>Bairro: {address.district}</p>
        </div>
      </div>

      <div className="container">
        <div className="container__bio">
          <p>{bio}</p>
        </div>

        <div className="container__links">
          <div className="">
            <Link to="/" className="link--adopt">
              <BiHomeHeart />
            </Link>

            <p>Procure um pet para adotar!</p>
          </div>

          <div>
            <p>
              Você também pode
              <Link to="/donations" className="link--donate">
                doar
              </Link>
              suprimentos para quem precisa.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ProfileAdoptPet;
