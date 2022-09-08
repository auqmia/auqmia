import styled from "styled-components";

export const FilterDiv = styled.div`
  width: 100%;
  margin: auto;
  color: var(--gray-0);

  @media (min-width: 768px) {
    width: 80%;
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

    > .filter__button {
      height: 50px;
      width: 50px;
      margin: 0 auto 25px;
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
    }
  }
`;
