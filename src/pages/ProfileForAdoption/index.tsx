import { DivMain } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RiAddFill } from "react-icons/ri";
import { Ul } from "../../components/Cards/style";
import { FaUserEdit, FaChevronDown, FaChevronUp } from "react-icons/fa";
import RegisterSupplies from "../../components/modalRegisterSupplies";
import ModalUpdateRegister from "../../components/ModalUpUser";

const ProfileForAdoption = () => {
  const {
    user,
    setModalUpdateUser,
    lisAnimalsUser,
    setIsShowModalPet,
    isShowModalPet,
    listSupplies,
    modalUpdateUser,
    isOpenModalSupplies,
    setIsOpenModalSupplies,
  } = useContext(AuthContext);

  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <DivMain>
      <div className="div-wrap">
        <main className="main-profile">
          <div className="subHeader-title">
            <h1>Minha raça favorita é: adotada.</h1>
          </div>
          <div className="div-container-info">
            <div className="div-info">
              <figure>
                <img
                  className="img-profile"
                  src={user?.picture}
                  alt="img profile"
                />
              </figure>
              <div className="div-name-location">
                <h2 className="name-user">{user?.name}</h2>
                <div className="div-align">
                  <h3 className="name-user">
                    {`${user.address?.city}, ${user.address?.state}`}
                  </h3>
                  {!isShowInfo ? (
                    <FaChevronDown onClick={() => setIsShowInfo(!isShowInfo)} />
                  ) : (
                    <FaChevronUp onClick={() => setIsShowInfo(!isShowInfo)} />
                  )}
                </div>
              </div>
            </div>

            {isShowInfo && (
              <div className="div-user-info">
                <div className="div-align-icon">
                  <p>Email: {user?.email}</p>

                  <FaUserEdit
                    onClick={() => setModalUpdateUser(!modalUpdateUser)}
                    className="icon--edit"
                  />
                </div>
                <p>Cidade: {user.address?.city}</p>
                <p>Estado: {user.address?.state}</p>
                <p>Bairro: {user.address?.district}</p>
              </div>
            )}
            <div className="data-user">
              <p className="name-user">{user?.bio}</p>
            </div>
          </div>

          <div className="container-pets">
            <div className="div-more-pets">
              <button
                onClick={() => setIsShowModalPet(!isShowModalPet)}
                className="button-more-pets"
              >
                <RiAddFill className="icon-button" />
              </button>
              <h3 className="title-more-pets">Colocar para Adoção</h3>
            </div>
            <div className="container-ul">
              <Ul className="ul-profile">
                {lisAnimalsUser?.map((elem) => (
                  <li key={elem.id} className={`list${elem.id}`}>
                    <h1>{elem.name}</h1>
                    <figure>
                      <img src={elem.url} alt="foto" />
                    </figure>
                    <div>
                      <h5>Animal: {elem.type}</h5>
                      <span>Gênero: {elem.genre}</span>
                      <p>Descrição: {elem.description}</p>
                    </div>
                    <button>Adotar</button>
                  </li>
                ))}
              </Ul>
            </div>
            <div className="div-more-pets">
              <button
                className="button-requests"
                onClick={() => setIsOpenModalSupplies(!isOpenModalSupplies)}
              >
                <RiAddFill className="icon-button" />
              </button>
              <p className="need-help">Preciso de Ajuda</p>
            </div>
            <ul className="list-supplies">
              <div className="div__header--supplies">
                <h2>Nome do Produto</h2>
                <p>Quantidade</p>
              </div>
              {listSupplies.map((element) => (
                <li key={element.id} className="li__supplies">
                  <div className="div__info--supplies">
                    <p>{element.product}</p>
                    <p>{`${element.quantity}kg`}</p>
                  </div>
                  <div className="div__line"></div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      {isOpenModalSupplies && <RegisterSupplies />}

      {modalUpdateUser && <ModalUpdateRegister />}
    </DivMain>
  );
};

export default ProfileForAdoption;
