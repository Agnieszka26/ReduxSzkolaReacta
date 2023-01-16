import { FC } from "react";
import styles from "./Label.module.scss";

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label: FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
