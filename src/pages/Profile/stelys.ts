import styled from "styled-components";

export const HeaderProfile = styled.header`
  box-shadow: 5px 2px 10px var(--gray-2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-height: 120px;

  .div-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    .div-buttons {
      display: flex;
      gap: 10px;
    }
  }
  .logo {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .button-logout {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-third);
    object-fit: cover;

    :hover {
      filter: contrast(0.8);
      animation: pulse 1s;
    }
  }
  .button-help {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-primary);
    object-fit: cover;
    :hover {
      filter: contrast(0.8);
      animation: pulse 1s;
    }
  }
  .big-logo {
    display: none;
  }
  .subHeader-title {
    color: var(--gray-0);
    padding: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    display: none;
  }

  @media (min-width: 768px) {
    .logo {
      display: none;
    }
    .big-logo {
      display: block;
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .subHeader-title {
      display: flex;
    }
  }
`;

export const DivMain = styled.div`
  width: 100vw;
  display: flex;
  width: 100%;
  overflow-x: hidden;
  justify-content: center;
  max-width: 1200px;

  .div-wrap {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-profile {
    padding: 20px 0px;
    width: 100%;

    .subHeader-title {
      color: var(--gray-0);
      padding: 20px 0px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .div-container-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .img-profile {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .div-name-location {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .data-user {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .info {
      color: var(--gray-0);
      background-color: var(--gray-2);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
    }
    .name-user {
      color: var(--color-secundary);
      font-family: var(--font-family);
    }
    .div-email {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .icon-edit {
        color: var(--gray-3);
        width: 25px;
        height: 25px;
      }
    }

    .div-more-pets {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 0px;
      gap: 15px;
    }
    .button-more-pets {
      background-color: var(--color-primary);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title-more-pets {
      color: var(--color-primary);
      font-family: var(--font-family);
      font-size: 20px;
    }
    .ul-profile {
      flex-direction: row;
      overflow-x: auto;
      justify-content: flex-start;
      li {
        max-height: 400px;
        p {
          display: none;
        }
        button {
          display: none;
        }
        img {
          max-height: 200px;
        }
      }
    }
    .button-requests {
      background-color: var(--color-secundary);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-button {
      color: var(--gray-0);
      width: 40px;
      height: 40px;
    }
    .need-help {
      color: var(--color-secundary);
      font-family: var(--font-family);
      font-size: 20px;
    }

    @media (min-width: 768px) {
      width: 100vw;
      display: flex;
      width: 100vw;
      justify-content: center;
      max-width: 1200px;
      gap: 10%;
      .container-pets {
        max-width: 60%;
      }

      .div-container-info {
        max-width: 30%;
        min-width: 300px;
      }

      .subHeader-title {
        display: none;
      }
      .div-info {
        display: flex;
        gap: 10px;
      }
      .ul-profile {
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        padding: 0px 50px 0px 0px;
        flex-direction: row;
        width: 100%;

        ::-webkit-scrollbar {
          border: none;
          width: 1px;
          height: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--gray-0);
          scroll-margin-top: 10px;
          border-radius: 5px;
          margin-top: 5px;
        }
      }
    }
  }
`;
