import styled from "styled-components";

export const Main = styled.main`
  width: 95%;
  margin: 30px auto;
  color: var(--gray-0);
  font-family: var(--font-family);
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  .mobile__title {
    font-size: 18px;
    font-style: italic;
    text-align: center;
    margin-bottom: 50px;

    @media (min-width: 760px) {
      display: none;
    }

    > h1 {
      font-weight: 400;
    }
  }

  .section__left {
    @media (min-width: 760px) {
      max-width: 40%;
    }
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
      max-width: 290px;
      margin: 30px auto;
      padding: 20px 15px 10px;
      background-color: var(--gray-2);
      border-radius: 10px;
      position: relative;

      @media (min-width: 450px) {
        margin: 30px 0px;
      }
      > .icon__edit {
        position: absolute;
        font-size: 18px;
        color: var(--color-third);
        top: 5px;
        right: 10px;
        cursor: pointer;

        :hover {
          animation: pulse 1s;
          scale: 1.1;
        }
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
        max-width: 300px;
        margin: auto;

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
    @media (min-width: 768px) {
      width: 60%;
      padding-left: 30px;
    }

    @media (min-width: 1024px) {
      padding-left: 50px;
    }
    > .user__bio {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 40px;

      > h3 {
        font-size: 22px;
        color: var(--color-secondary);
        margin-bottom: 15px;
      }

      > p {
        text-align: justify;
        max-height: 250px;
        overflow-y: auto;
      }
    }
    > .container__pets {
      > .pets__header {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        > .pets__link {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background-color: var(--color-primary);
          margin-right: 10px;

          :hover {
            animation: pulse 1s;
            > svg {
              animation: rubberBand 1s;
            }
          }

          > svg {
            font-size: 35px;
            color: var(--gray-0);
            margin: 7.5px;
          }
        }
        > .pets__text {
          font-size: 20px;
          color: var(--color-primary);
        }
      }
      > .pets__cards {
        width: 90%;
        height: 260px;
        display: flex;
        margin: auto;
        gap: 20px;
        overflow-x: auto;
        overflow-y: hidden;

        @media (min-width: 768px) {
          width: 100%;
        }

        > .pet__card {
          width: 200px;
          height: 250px;
          position: relative;

          :hover {
            animation: pulse 1s;

            > .card__img {
              scale: 1.2;
            }
          }

          > .card__img {
            width: 200px;
            height: 250px;
            object-fit: cover;
            border-radius: 20px;
          }

          > p {
            display: none;
            width: 170px;
            position: absolute;
            left: 20px;
            bottom: 10px;
            color: var(--color-primary);
            font-size: 20px;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;
