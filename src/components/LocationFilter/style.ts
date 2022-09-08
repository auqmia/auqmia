import styled from "styled-components";

export const FilterDiv = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  /* display: flex; */
  color: var(--gray-0);

  @media (min-width: 768px) {
    /* width: 80%; */
    margin-left: 40px;
  }

  > .filter__title {
    font-size: 22px;
    font-weight: 300;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  > .filter__form {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;

      > div + div {
        width: 45%;
      }
    }

    > div {
      max-height: 70px;

      @media (min-width: 500px) {
        width: 50%;
      }

      @media (min-width: 768px) {
        width: 40%;
        max-height: 100px;
      }

      > .container__dropdown {
        > .dropdown__select {
          color: var(--color-primary);
        }
        > .dropdown__content {
          width: 80%;
          max-height: 90px;
          margin-left: 20px;
        }
      }
    }

    > .filter__buttons {
      width: 50%;
      display: flex;
      justify-content: center;
      gap: 50px;
      margin: 0 auto 25px;

      @media (min-width: 768px) {
        justify-content: flex-start;
        margin-left: 20px;
      }

      > .filter__button.button--link {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-third);
        @media (min-width: 768px) {
          width: fit-content;
          padding: 0 15px;
        }
      }

      > .filter__button {
        height: 50px;
        width: 50px;
        padding: 10px;
        background-color: var(--color-secondary);
        border-radius: 25px;

        :hover {
          animation: pulse 1s;
          > svg {
            animation: rubberBand 1s;
            scale: 1.1;
          }
        }

        > svg {
          color: var(--gray-0);
          font-size: 30px;
        }

        > .link__text {
          display: none;
          width: fit-content;
          margin: 0;
          color: var(--gray-0);
          font-size: 20px;

          @media (min-width: 768px) {
            display: inline;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
