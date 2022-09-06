import styled from "styled-components";

export const Main = styled.main`
  width: 95%;
  margin: 30px auto;
  color: var(--gray-0);
  font-family: var(--font-family);

  .mobile__title {
    font-size: 18px;
    font-style: italic;
    text-align: center;
    margin-bottom: 50px;

    > h1 {
      font-weight: 400;
    }
  }

  .section__left {
    > .user__mainInfo {
      width: 100%;
      display: flex;
      align-items: flex-end;

      > .user__figure {
        > img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 100px;
        }
      }

      > .user__name {
        width: fit-content;
        margin-left: 15px;
        color: var(--color-secondary);
        font-size: 18px;
        font-weight: 200;
        > h2 {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }

    > .user__moreInfo {
      width: 100%;
      margin: 30px auto;
      padding: 20px 15px 10px;
      background-color: var(--gray-2);
      border-radius: 10px;
      position: relative;

      > .icon__edit {
        position: absolute;
        font-size: 18px;
        color: var(--color-third);
        top: 5px;
        right: 10px;
      }

      > p {
        color: var(--color-third);
        font-weight: 600;
        > span {
          color: var(--gray-0);
          font-weight: 300;
        }
      }
    }

    > .donate__link {
      font-size: 22px;
      text-align: center;
      margin-bottom: 40px;

      > p {
        font-weight: 200;

        > a.link--donate {
          cursor: pointer;
          text-decoration: none;
          color: var(--color-primary);
          font-style: italic;
          font-weight: 700;
        }
      }
    }
  }

  .section__right {
    > .user__bio {
    }
    > .container__pets {
      > .pets__header {
        > .pets__link {
        }
        > .pets__text {
        }
      }
      > .pets__cards {
      }
    }
  }
`;
