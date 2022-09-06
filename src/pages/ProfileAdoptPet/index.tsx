import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { Main } from "./style";
import { Link } from "react-router-dom";

const ProfileAdoptPet = () => {
  const { user, setModalUpdateUser } = useContext(AuthContext);
  const { name, picture, email, birthday, address, bio } = user;
  const [birthDate] = useState(() => {
    const date = new Date(birthday);
    const month = date.getMonth() + 1;
    return `${date.getDate()}/${
      month < 10 ? `0${month}` : month
    }/${date.getFullYear()}`;
  });
  useEffect(() => {
    console.log(birthDate);
  });
  return (
    <Main>
      <div className="mobile__title">
        <h1>"Minha raça favorita é: adotada.</h1>
      </div>

      <section className="section__left">
        <div className="user__mainInfo">
          <figure className="user__figure">
            <img src={picture} alt={`${name}`} />
          </figure>

          <div className="user__name">
            <h2>{name}</h2>
            <p>
              {address?.city}, {address?.state}
            </p>
          </div>
        </div>

        <div className="user__moreInfo">
          <MdOutlineEditNote className="icon__edit" />
          <p>
            Email: <span> {email}</span>
          </p>
          <p>
            Data de nascimento: <span>{birthDate}</span>
          </p>
          <p>
            Estado: <span>{address?.state}</span>
          </p>
          <p>
            Cidade: <span>{address?.city}</span>
          </p>
          <p>
            Bairro: <span>{address?.district}</span>
          </p>
        </div>

        <div className="donate__link">
          <p>
            Você também pode
            <Link to="/donations" className="link--donate">
              &nbsp;doar&nbsp;
            </Link>
            suprimentos para quem precisa.
          </p>
        </div>
      </section>

      <section className="section__right">
        <div className="user__bio">
          <p>{bio}</p>
        </div>

        <div className="container__pets">
          <div className="pets__header">
            <Link to="/" className="pets__link">
              <BiHomeHeart />
            </Link>

            <p className="pets__text">Procure um pet para adotar!</p>
          </div>

          <div className="pets__cards">Exibir fotos de pets!</div>
        </div>
      </section>
    </Main>
  );
};

export default ProfileAdoptPet;
