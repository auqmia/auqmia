import styled from "styled-components";

export const DivMain = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  max-width: 1200px;
  margin: auto;

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
      .div-info {
        margin-bottom: 20px;
      }

      .div-align {
        display: flex;
        color: var(--color-secondary);
        gap: 15px;
        align-items: center;
        cursor: pointer;
      }
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
      gap: 10px;
    }
    .data-user {
      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 10px;
      color: var(--color-secondary);
    }
    .div-user-info {
      color: var(--gray-0);
      background-color: var(--gray-2);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;

      .div-align-icon {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
      }
      .icon--edit {
        cursor: pointer;
      }
    }
    .name-user {
      color: var(--color-secondary);
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

    .div-button-more-pets {
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
      background-color: var(--color-secondary);
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
      color: var(--color-secondary);
      font-family: var(--font-family);
      font-size: 20px;
    }
    .list-supplies {
      color: var(--gray-0);
      min-width: 200px;
      max-width: 300px;
      width: 100%;
      .div__header--supplies {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .li__supplies {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .div__info--supplies {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0px 5px;
      }
      .div__line {
        background-color: var(--color-secondary);
        height: 2px;
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      width: 100vw;
      display: flex;
      width: 100vw;
      justify-content: space-around;

      max-width: 1200px;
      gap: 5%;

      .container-pets {
        max-width: 65%;
      }

      .div-container-info {
        max-width: 300px;
        min-width: 300px;
      }

      .subHeader-title {
        display: none;
      }
      .div-info {
        display: flex;
        gap: 10px;
      }
      .data-user {
        margin-left: 10px;
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
        }
      }
    }
  }
`;
