import { FC } from "react";
import styles from "../message/Message.module.scss";

interface MessageProps {
  type: "info" | "warning" | "danger" | "default";
  textContent: string;
}

const Message: FC<MessageProps> = ({ type, textContent }) => {
  const typeMessage = () => {
    switch (type) {
      case "info":
        return styles.info;
      case "danger":
        return styles.danger;
      case "warning":
        return styles.warning;
      default:
        return styles.default;
    }
    // return styles.warning;
  };
  return (
    <>
      <div className={typeMessage()}>
        <h1>{type}</h1>
        <p>{textContent}</p>
      </div>
    </>
  );
};

export default Message;
