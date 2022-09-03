import styled from "styled-components";

interface Props {
    isOpenModal: boolean;
}

export const ModalUpdateUser = styled.div<Props>`
display: ${(prop) => (prop.isOpenModal ? "block" : "none")};
width: 500px;
    position: fixed;
    top: 2%;
    left: 35%;
    background-color: rgba(0,0,0, 0.5);
    z-index: 1;
    text-align: center;

    .close {
        width: 7%;
    height: 26px;
    margin-top: 4%;
    background-color: #343b41;
    border: none;
    color: white;
    font-size: 100%;
    cursor: pointer;
    }
`