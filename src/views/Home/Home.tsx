import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import Message from "../../components/Message/Message";
import AsyncThunkConfig, { AppDispatch } from "../../store";
import { getUsers, reset } from "../../store/usersReducer/slice";
import Heading from "../../typography/Heading/Heading";
import styles from "./Home.module.scss";

enum ButtonType {
  RESET = "reset",
  RELOAD = "reload",
  ADD = "add",
}

const buttonData = [ButtonType.RESET, ButtonType.RELOAD, ButtonType.ADD];

const Home = () => {
  const [counter, setCounter] = useState(1);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"default" | "info" | "warning" | "danger">(
    "default"
  );
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (
    type: "default" | "info" | "warning" | "danger",
    displayMessage: boolean,
    msg: string,
    action:
      | { payload: undefined; type: "users/reset" }
      | AsyncThunkAction<any, number, typeof AsyncThunkConfig>,

    addMoreUser?: "add"
  ) => {
    setType(type);
    setDisplayMessage(displayMessage);
    dispatch(action);
    setMessage(msg);
    if (typeof addMoreUser !== "undefined") {
      setCounter((prev) => prev + 1);
    }
    setTimeout(() => setDisplayMessage(false), 3000);
  };

  const renderButtonAction: Record<ButtonType, () => void> = {
    [ButtonType.RESET]: () =>
      onClick("danger", true, "You have reset users", reset()),
    [ButtonType.RELOAD]: () =>
      onClick("warning", true, "You have reload users", getUsers(10)),
    [ButtonType.ADD]: () =>
      onClick(
        "info",
        true,
        "You have added more users",
        getUsers(10 + counter),
        "add"
      ),
  };

  return (
    <div className={styles.container}>
      <Heading text="Home" />
      <div className={styles.buttonsContainer}>
        {buttonData.map((buttonText) => (
          <Button
            onClick={renderButtonAction[buttonText]}
            text={buttonText}
            key={buttonText}
          />
        ))}
      </div>
      {displayMessage ? <Message type={type} textContent={message} /> : null}
    </div>
  );
};

export default Home;
