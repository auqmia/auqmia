import { StyledSelect } from "./style";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

interface ISelect {
  label: string;
  options: string[];
  onClick: (e: any) => void;
}
const Select = ({ label, options, onClick }: ISelect) => {
  const [isOptionsShowing, setIsOptionsShowing] = useState(false);
  const [selectText, setSelectText] = useState("Selecione uma opção:");

  function showOptions() {
    setIsOptionsShowing(!isOptionsShowing);
  }

  function optionClick(option: string) {
    setIsOptionsShowing(false);
    setSelectText(option);
    document
      .querySelector(`.dropdown__select.${label} > p`)
      ?.setAttribute("style", "color: var(--gray-0)");
  }

  return (
    <StyledSelect>
      <h4 className="select__label">{label}</h4>
      <div className="container__dropdown">
        <button
          className={`dropdown__select ${label}`}
          type="button"
          onClick={showOptions}
        >
          <p>{selectText}</p>
          <FaAngleDown className="dropdown__arrow" />
        </button>
        {isOptionsShowing && (
          <ul className={`dropdown__content`}>
            {options.map((option, index) => (
              <li
                className="dropdown__option"
                key={index}
                id={option}
                onClick={(e: any) => {
                  onClick(e);
                  optionClick(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledSelect>
  );
};

export default Select;
