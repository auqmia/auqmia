import styled from "styled-components";

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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--gray-2);
  border-radius: 7px;
  max-width: 440px;

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
  .button-login:hover {
    filter: contrast(0.5);
  }
  .paragrafo-form {
    font-family: var(--font-family);
    color: var(--gray-3);
  }
  .button-cadastra-se {
    background-color: var(--gray-2);
    color: var(--color-secundary);
  }
  .footer-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
`;
