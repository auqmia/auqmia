import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  justify-content: center;

  max-height: 120px;

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
      align-items: center;

      h1 {
        display: none;
      }
      @media (min-width: 768px) {
        h1 {
          display: flex;
          text-align: center;

          width: 100%;
          max-width: 450px;

          font-size: 1.5rem;

          color: var(--gray-0);
        }
      }
    }

    .buttons-div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      gap: 10px;
    }

    @media (min-width: 400px) {
      .buttons-div {
        min-width: 200px;
      }
    }
  }
`;

export const ButtonHoverLogin = styled.button`
  height: 50px;
  min-width: 50px;
  max-width: max-content;
  padding: 0px 10px;
  border-radius: 25px;
  background-color: var(--color-secondary);
  font-size: 24px;
  font-family: var(--font-family);
  color: var(--gray-0);
  gap: 5px;
  transition: width 1s;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > .login, .logout {
    max-width: 0;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    color: var(--color-secondary);
    transition: color 1.2s, max-width 1.5s;

    display: flex;
    text-align: center;
  }

  > svg {
    display: inline-block;
    font-size: 28px;
  }

  @media (min-width: 400px) {
    :hover .login, :hover .logout {
      max-width: 120px;
      color: var(--gray-0);
    }
  }
`;

export const ButtonHoverDonation = styled.button`
  height: 50px;
  min-width: 50px;
  max-width: max-content;
  padding: 0px 10px;
  border-radius: 25px;
  background-color: var(--color-primary);
  font-size: 24px;
  font-family: var(--font-family);
  color: var(--gray-0);
  gap: 5px;
  transition: width 1s;
  vertical-align: middle;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 5px;

  > .donation, .home {
    max-width: 0;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    color: var(--color-secondary);
    transition: color 1.2s, max-width 1.5s;
  }

  > svg {
    display: inline-block;
    font-size: 28px;
  }

  @media (min-width: 400px) {
    :hover .donation, :hover .home {
      max-width: 150px;
      color: var(--gray-0);
    }
  }
`;
