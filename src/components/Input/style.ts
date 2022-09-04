import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--gray-3);
  height: 50px;
  border: 3px solid var(--gray-4);
  border-radius: 25px;
  width: 100%;
  outline: none;
  padding-left: 25px;
  padding-right: 25px;
  font-family: var(--font-family);
  color: var(--gray-0);
  font-size: 16px;

  ::-webkit-calendar-picker-indicator {
    filter: invert(53%) sepia(91%) saturate(438%) hue-rotate(131deg)
      brightness(106%) contrast(107%);
  }
`;

export const RadioDiv = styled.div`
  /* display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  margin: 0; */
  width: fit-content;
`;

export const InputRadio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--color-primary);
  border-radius: 50%;
  transform: translateY(11px);
  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    background-color: var(--color-primary);
    mask-image: url("paw-solid.svg");
    background-size: 10px 10px;
    background-repeat: no-repeat;
  }
  :checked::before {
    transform: scale(1);
    animation: rubberBand 1s;
  }
`;
