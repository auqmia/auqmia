import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 80%;
  height: 120px;
  margin: auto;
  > .select__label {
    background-color: none;
    color: var(--color-primary);
    font-size: 22px;
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  > .container__dropdown {
    width: 100%;
    max-height: fit-content;
    box-sizing: border-box;
    border-radius: 25px;

    position: relative;

    > .dropdown__select {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      border-radius: 25px;
      border: 3px solid var(--gray-4);
      background-color: var(--gray-2);
      color: var(--gray-3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      > p {
      }

      > .dropdown__arrow {
        transform: translateY(2px);
        font-size: 22px;
        transition: scale 1s ease-in-out;
        :hover {
          animation: pulse 1s;
          scale: 1.2;
        }
      }
    }

    > .dropdown__content {
      width: 100%;
      max-height: 120px;
      overflow-y: auto;
      padding: 10px 0 20px;
      border-radius: 5px;
      margin-top: 5px;
      color: var(--gray-0);
      background-color: var(--gray-2);
      transition: color 1.2s, max-height 1.5s;

      position: absolute;
      z-index: 1;

      > .dropdown__option {
        width: 100%;
        padding: 0 15px;
        margin: auto;
        height: 35px;
        line-height: 35px;
        border-bottom: 2px solid var(--gray-3);

        :hover {
          background-color: var(--gray-3);
        }
      }
    }
  }
`;
