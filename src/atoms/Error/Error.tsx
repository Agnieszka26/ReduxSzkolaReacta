import { FC } from "react";
import styles from "./Error.module.scss";

interface ErrorProps {
  message?: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default Error;
