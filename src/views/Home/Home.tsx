import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import Message from "../../components/Message/Message";
import AsyncThunkConfig, { AppDispatch, useAppSelector } from "../../store";
import {
  setDanger,
  setInfo,
  setWarning,
} from "../../store/messageReducer/slice";
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
  const { isOpen, type, textContent } = useAppSelector(
    (state) => state.message
  );
  const dispatch = useDispatch<AppDispatch>();
  const [counter, setCounter] = useState(1);
  const onClick = (
    x:
      | { payload: string; type: "message/setWarning" }
      | { payload: string; type: "message/setInfo" }
      | { payload: string; type: "message/setDanger" },
    action:
      | { payload: undefined; type: "users/reset" }
      | AsyncThunkAction<any, number, typeof AsyncThunkConfig>,

    addMoreUser?: "add"
  ) => {
    dispatch(action);
    if (typeof addMoreUser !== "undefined") {
      setCounter((prev) => prev + 1);
    }
  };

  const renderButtonAction: Record<ButtonType, () => void> = {
    [ButtonType.RESET]: () =>
      onClick(dispatch(setWarning("You have reset users")), reset()),
    [ButtonType.RELOAD]: () =>
      onClick(dispatch(setInfo("You have reload users")), getUsers(10)),
    [ButtonType.ADD]: () =>
      onClick(
        dispatch(setDanger("You have add one more user to the list")),
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
      {isOpen && <Message type={type} textContent={textContent} />}
    </div>
  );
};

export default Home;
