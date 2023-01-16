import cn from "classnames";
import { FC, useEffect, useState } from "react";
import styles from "./Message.module.scss";

interface MessageProps {
  type: "info" | "warning" | "danger" | "default";
  textContent: string;
}

const Message: FC<MessageProps> = ({ type, textContent }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

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
