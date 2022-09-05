import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  display: flex;

  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  align-items: center;

  .modal-register-pets {
    position: relative;
    width: 90%;

    max-width: 370px;
    max-height: 6500px;
    background-color: var(--gray-5);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0px;
  }
  .header-modal {
    color: var(--color-primary);
  }
  .Form {
    width: 90%;
    .title-radio {
      color: var(--color-primary);
      font-family: var(--font-family);
      padding: 5px 20px;
    }

    .div-input-radio {
      display: flex;
      color: var(--gray-0);
      padding-left: 20px;
      gap: 20px;
      .custom-radio {
        display: flex;
        gap: 5px;
      }
    }

    .div-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 15px;
    }
  }
`;
