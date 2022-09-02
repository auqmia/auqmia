import styled from "styled-components";

export const HeaderProfile = styled.header`
  box-shadow: 5px 2px 10px var(--gray-2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  .div-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    .div-buttons {
      display: flex;
      gap: 10px;
    }
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .button-logout {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-third);
  }
  .button-help {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-primary);
  }
`;

export const DivMain = styled.div`
  width: 100vw;
  display: flex;

  justify-content: center;
  .subHeader-title {
    color: var(--gray-0);
    padding: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .div-wrap {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main-profile {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .data-user {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
      padding-top: 20px;
      gap: 15px;
    }
    .button-more-pets {
      background-color: var(--color-primary);
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .title-more-pets {
      color: var(--color-primary);
      font-family: var(--font-family);
      font-size: 20px;
    }
  }
`;
