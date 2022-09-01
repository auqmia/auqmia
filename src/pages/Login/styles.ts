import styled from "styled-components";
import "animate.css";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLoginForm = styled.form`
  box-sizing: border-box;
  width: 90%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--gray-2);
  border-radius: 7px;
  max-width: 440px;

  animation: backInLeft 1s;

  .titulo {
    color: var(--color-primary);
    font-weight: var(--font-family);
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 72px;
    text-align: center;
    padding: 20px 0px 50px 0px;
  }
  .container-input {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .warp-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .div-pass {
    position: relative;
  }
  .eyes {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    color: var(--color-primary);
    right: 20px;
    width: 20px;
    height: 20px;
  }
  .button-login {
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
  .div-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15px;
  }
  .button-back {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-third);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-back {
    color: #ffffff;
    width: 40px;
    height: 30px;
  }
  .button-login:hover {
    filter: contrast(0.5);

    animation: pulse 1s;
  }
  .button-check {
    transition: ease-in-out 0.5s;
    width: 20px;
    height: 20px;
  }
  .button-login:hover > .button-check {
    animation: rubberBand 1s;
    scale: 1.5;
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
