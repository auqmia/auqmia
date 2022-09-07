import styled from "styled-components";

export const ModalRegisterSupplies = styled.section`
  position: relative;
  width: 90%;
  top: -20px;
  max-width: 420px;
  max-height: 650px;
  background-color: var(--gray-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px 0px;

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
  }
`;
