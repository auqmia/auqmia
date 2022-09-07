import styled from "styled-components";

export const DivMainDonarte = styled.div`
  display: flex;

  justify-content: center;
`;

export const UlDonate = styled.ul`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .div__title--help {
    width: 90%;
    display: flex;
    justify-content: flex-start;

    color: var(--color-primary);
    font-size: 25px;
  }
  .list__users {
    width: 90%;
    max-width: 400px;
    background-color: var(--gray-3);
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.6);
    padding: 20px 0px;
    border-radius: 10px;
    color: var(--gray-0);
    figure {
      display: flex;
      width: 100%;

      justify-content: center;
    }
    img {
      width: 250px;
      height: 200px;
      border-radius: 10px;
    }
    .div__info--users {
      display: flex;
      flex-direction: column;
      width: 89%;
      padding: 0px 0px 0px 6%;
      justify-content: flex-start;
    }
    .div__help--users {
      margin: 20px 0px;
      font-size: 20px;
    }
    .div__button--help {
      color: var(--gray-0);
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        background-color: var(--color-primary);
        border-radius: 10px;
        color: var(--gray-0);
        font-weight: 800;
        padding: 3px 10px;
      }
    }
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .div__list--user {
      display: flex;
    }
    .list__users {
      max-width: 450px;
      padding: 10px 10px;
    }
    .div__button--help {
      height: 100%;
      display: flex;
      align-items: flex-end;
    }
  }
`;
