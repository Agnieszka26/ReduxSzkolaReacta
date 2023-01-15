import cn from "classnames";
import { FC } from "react";
import styles from "./Message.module.scss";

interface MessageProps {
  type: "info" | "warning" | "danger" | "default";
  textContent: string;
}

const Message: FC<MessageProps> = ({ type, textContent }) => {
  return (
    <>
      <div className={cn(styles.container, styles[`hasType-${type}`])}>
        <h1>{type}</h1>
        <p>{textContent}</p>
      </div>
    </>
  );
};

export default Message;
