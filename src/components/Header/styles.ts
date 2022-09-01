import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0px 5px 17px 4px rgba(31, 30, 30, 0.7);

  .logo-div {
    .logo-AuqMia {
      display: none;
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

  .buttons-div {
    display: flex;
    flex-direction: column;

    gap: 10px;

    .login-button {
      background: none;
    }

    .donation-button {
      background: none;
    }
  }
`;
