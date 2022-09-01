import styled from "styled-components";
import "animate.css";

export const ContainerForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50px;
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

  .form__titulo {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .form__input {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input__password {
    position: relative;
  }
  .icon__eyes {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    color: var(--color-primary);
    right: 20px;
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
    background-color: var(--color-secundary);
    margin: 20px 0px;
  }
  .form__button:hover {
    filter: contrast(0.5);

    animation: pulse 1s;
  }
  .button-check {
    transition: ease-in-out 0.5s;
  }
  .form__button:hover > .button-check {
    animation: rubberBand 1s;
    scale: 1.5;
  }
  .footer__text {
    font-family: var(--font-family);
    color: var(--gray-3);
  }
  .form__link {
    background-color: var(--gray-2);
    color: var(--color-secundary);
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
    padding-bottom: 30px;
  }
`;
