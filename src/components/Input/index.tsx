import { Input } from "./style";

interface IProps {
  inputValue: string;
}

const InputForm = (props: IProps) => {
  return <Input placeholder={props.inputValue} />;
};

export default InputForm;
