import styled from "styled-components";
import "animate.css";

export const ContainerForm = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 35px;
  transition: padding 0.8s ease-in-out;

  @media (min-width: 760px) {
    padding-top: 100px;
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--gray-2);
  border-radius: 7px;
  max-width: 440px;

  animation: backInLeft 1s;

  .form__title {
    color: var(--color-primary);
    font-weight: var(--font-family);
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 72px;
    text-align: center;
    padding: 20px 0px 50px 0px;
  }

  .form__container {
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .form__input {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    > .radio--inputs + p {
      top: 75px;
    }

    @media (min-width: 450px) {
      > .radio--inputs {
        display: flex;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .form__input--radio {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;

    @media (min-width: 400px) {
    }
    > label {
      margin: 0 5px 0 10px;
      font-size: 18px;
      color: var(--gray-0);
    }

    > label + input {
      margin-left: 20px;
    }
  }
  .user_type__info--question_mark {
    cursor: pointer;
    font-size: 14px;
    color: var(--gray-0);
    transform: translateY(7px);
  }
  .user_type__info--question_mark:hover + .user_type__info--text {
    display: block;
  }
  .user_type__info--text {
    display: none;
    position: absolute;
    top: 50px;
    left: -50px;
    z-index: 1;

    width: 260px;
    height: fit-content;
    padding: 5px 10px;
    text-align: justify;
    font-family: var(--font-family);
    font-size: 14px;
    color: var(--gray-0);
    background-color: var(--gray-2);
    border: 3px solid var(--gray-3);
    border-radius: 10px;

    transition: top 0.5s ease-in-out;

    > .user_type__info--heart {
      float: right;
      color: var(--color-error);
    }

    @media (min-width: 450px) {
      top: 50px;
      left: -130px;
    }
  }

  .input__password {
    position: relative;
  }
  .icon__eyes {
    position: absolute;
    top: 15px;
    right: 30px;
    cursor: pointer;
    color: var(--color-primary);
    width: 20px;
    height: 20px;
  }

  .form__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-0);
    background-color: var(--color-secondary);
    margin: 20px 0px;
  }

  .form__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15px;
  }

  .paragraph-form {
    font-family: var(--font-family);
    color: var(--gray-3);
  }
  .button-register {
    background-color: var(--gray-2);
    color: var(--color-secundary);
    transition: ease-in-out 0.5s;
  }
  .button-register:hover {
    animation: pulse 1s;
  }
  .footer-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ButtonBack = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-third);
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    animation: pulse 1s;
  }

  :hover > .icon-back {
    animation: rubberBand 1s;
    scale: 1.5;
  }
  .icon-back {
    transition: ease-in-out 0.5s;
    width: 20px;
    height: 20px;
  }

  .icon-back {
    color: #ffffff;
    width: 40px;
    height: 30px;
  }
`;

export const ButtonCheck = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-0);
  background-color: var(--color-secundary);
  margin: 20px 0px;

  :hover {
    .button--back {
      background-color: var(--color-third);
    }

    .form__button:hover {
      filter: contrast(0.5);

      animation: pulse 1s;
    }
    .form__button--icon {
      font-size: 18px;
      transition: ease-in-out 0.5s;
    }
    :hover > .button-check {
      animation: rubberBand 1s;
      scale: 1.5;
    }
    .form__button:hover > .form__button--icon {
      animation: rubberBand 1s;
      scale: 1.5;
    }
    .icon__arrow {
      font-size: 30px;
    }
    .footer__text {
      font-family: var(--font-family);
      color: var(--gray-3);
    }
    .form__link {
      background-color: var(--gray-2);
      color: var(--color-secondary);
      transition: ease-in-out 0.5s;
    }
    .form__link:hover {
      animation: pulse 1s;
    }
    .form__footer {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      padding-bottom: 20px;
    }
    .footer--register {
      flex-direction: row-reverse;
      gap: 45px;
      padding-top: 20px;
    }
  }
`;
