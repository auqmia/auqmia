import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1290px;

  animation: fadeInRight 1s;

  gap: 30px;

  margin: 0 auto;

  @media (min-width: 620px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .remove-card {
    animation: bounceOutRight 1s;
  }

  li {
    display: flex;
    align-items: center;
    flex-direction: column;

    max-width: 280px;
    max-height: 450px;

    padding: 20px;

    background-color: var(--gray-3);

    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.2);

    border-radius: 8px;
    padding-bottom: 5px;

    h1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: 220px;

      font-size: 1.5rem;

      color: var(--color-primary);

      margin-bottom: 20px;
    }

    figure {
      width: 260px;
      height: 300px;

      overflow: hidden;

      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;

        transition: 1s;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 260px;

      color: var(--gray-0);

      gap: 5px;

      margin-top: 10px;

      h4,
      h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: 1.2rem;
        font-weight: 500;

        color: var(--gray-0);

        span {
          font-weight: bold;
        }
      }

      h6 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;

        color: var(--gray-0);

        span {
          font-weight: bold;
        }
      }
    }

    button {
      font-weight: bold;

      color: var(--gray-0);
      background-color: var(--color-third);

      padding: 5px 30px;

      margin-top: 20px;

      border-radius: 8px;
    }
    button:hover {
      animation: pulse 1s;
    }
  }

  li:hover {
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.6);
  }

  li:hover > figure > img {
    scale: 1.1;
  }
`;
