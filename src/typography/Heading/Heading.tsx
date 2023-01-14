import { FC } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export default Heading;
