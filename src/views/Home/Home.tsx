import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsers, reset } from "../../store/usersReducer/slice";
// import {getOneUser, myOneUser} from "../../features/users/myUserSlice";
import Heading from "../../typography/Heading/Heading";
import Button from "../../atoms/Button/Button";
import { AppDispatch } from "../../store";

enum ButtonType {
  RESET = "reset",
  RELOAD = "reload",
  ADD = "add",
}

const buttonData = [ButtonType.RESET, ButtonType.RELOAD, ButtonType.ADD];

const Home = () => {
  // const userState = useSelector(myOneUser);
  const dispatch = useDispatch<AppDispatch>();

  const renderButtonAction: Record<ButtonType, () => void> = {
    [ButtonType.RESET]: () => dispatch(reset()),
    [ButtonType.RELOAD]: () => dispatch(getUsers(10)),
    [ButtonType.ADD]: () => dispatch(getUsers(1)),
  };

  useEffect(() => {
    // dispatch(getOneUser());
  }, [dispatch]);

  return (
    <div>
      <Heading text="Home" />
      {buttonData.map((buttonText) => (
        <Button onClick={renderButtonAction[buttonText]} text={buttonText} />
      ))}
    </div>
  );
};

export default Home;
