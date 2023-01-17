import cn from "classnames";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { close } from "../../store/messageReducer/slice";
import styles from "./Message.module.scss";

interface MessageProps {
  type: "info" | "warning" | "danger" | "default";
  textContent: string;
}

const Message: FC<MessageProps> = ({ type, textContent }) => {
  const { isOpen } = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(close());
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [dispatch]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={cn(styles.container, styles[`hasType-${type}`])}>
        <h1>{type}</h1>
        <p>{textContent}</p>
        <button className={styles.button} onClick={() => dispatch(close())}>
          x
        </button>
      </div>
    </>
  );
};

export default Message;
