import styled from "styled-components";

export const ButtonHover = styled.button`
  height: 50px;
  min-width: 50px;
  padding: 0px 10px;
  border-radius: 25px;
  background-color: var(--color-secondary);
  font-size: 24px;
  font-family: var(--font-family);
  color: var(--gray-0);
  gap: 5px;
  transition: width 1s;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > p {
    max-width: 0;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    color: var(--color-secondary);
    transition: color 1.2s, max-width 1.5s;
  }

  > svg {
    display: inline-block;
  }
  :hover p {
    max-width: 120px;
    color: var(--gray-0);
  }
`;
