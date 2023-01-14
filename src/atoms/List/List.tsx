import { FC, ReactNode } from "react";

import styles from "./List.module.scss";

interface ListProps {
  children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return <ul className={styles.ul}>{children}</ul>;
};

export default List;
