import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./ListElement.module.scss";

interface ListElementProps {
  text: string;
  link: string;
}
const ListElement: FC<ListElementProps> = ({ text, link }) => {
  return (
    <li className={styles.li}>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default ListElement;
