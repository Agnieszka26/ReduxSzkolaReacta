import cn from "classnames";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps {
  register: any;
  placeholder: string;
  isError?: FieldError;
}

const Input: FC<InputProps> = ({ register, placeholder, isError }) => {
  console.log("isError  import ", isError?.type);
  return (
    <input
      className={cn(styles.input, styles[`hasError-${isError?.type}`])}
      {...register}
      placeholder={placeholder}
    />
  );
};

export default Input;
