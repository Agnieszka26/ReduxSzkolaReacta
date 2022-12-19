import {FC} from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
