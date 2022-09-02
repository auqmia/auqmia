import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  justify-content: center;

  animation: fadeInLeft 1s;

  padding: 0px 40px;

  box-shadow: 0px 5px 17px 4px rgba(31, 30, 30, 0.7);

  margin-bottom: 40px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1290px;

    .logo-div {
      .logo {
        height: 120px;
      }

      .logo-AuqMia {
        display: none;

        height: 120px;
      }

      @media (min-width: 768px) {
        .logo-AuqMia {
          display: block;
        }
        .logo {
          display: none;
        }
      }
    }

    .mid-div {
      display: flex;

      h1 {
        display: none;
      }
      @media (min-width: 768px) {
        h1 {
          display: flex;
          text-align: center;

          width: 300px;

          font-size: 1.5rem;

          color: var(--gray-0);
          /* text-shadow: 0.1em 0.1em 0.2em var(--color-primary); */
        }
      }

      .footprints-figure {
        display: none;

        max-width: 200px;
        max-height: 120px;
      }
      .footprints-img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }

      @media (min-width: 476px) {
        .footprints-figure {
          display: block;
        }
      }
    }

    .buttons-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 10px;

      .login-button {
        background: none;
      }
      .login-button:hover {
        animation: pulse 1s;
      }
      .login-button-img {
        height: 40px;
      }

      .new-login-button {
        background: none;

        animation: backInRight 1s;
      }

      .donation-button {
        background: none;
      }
      .donation-button:hover {
        animation: pulse 1s;
      }
      .donation-button-img {
        height: 40px;
      }

      .new-donation-button {
        background: none;

        animation: backInRight 1s;
      }
    }
  }
`;
