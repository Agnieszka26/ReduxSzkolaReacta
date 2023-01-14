import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import { AppDispatch } from "../../store";
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {}, []);

  const onClickAdd = () => {
    console.log(counter);
    setCounter((prev) => prev + 1);
    dispatch(getUsers(10 + counter));
  };

  const renderButtonAction: Record<ButtonType, () => void> = {
    [ButtonType.RESET]: () => dispatch(reset()),
    [ButtonType.RELOAD]: () => dispatch(getUsers(10)),
    [ButtonType.ADD]: () => onClickAdd(),
  };

  return (
    <div className={styles.container}>
      <Heading text="Home" />
      <div className={styles.buttonsContainer}>
        {buttonData.map((buttonText) => (
          <Button onClick={renderButtonAction[buttonText]} text={buttonText} />
        ))}
      </div>
    </div>
  );
};

export default Home;
