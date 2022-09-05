import styled from "styled-components";

interface Props {
  isOpenModal: boolean;
}

export const ContainerModal = styled.div<Props>`
  position: fixed;
  display: ${(prop) => (prop.isOpenModal ? "flex" : "none")};

  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  align-items: center;

  .modal-update {
    position: relative;
    width: 90%;
    top: -20px;
    max-width: 370px;
    max-height: 550px;
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
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;
