import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
