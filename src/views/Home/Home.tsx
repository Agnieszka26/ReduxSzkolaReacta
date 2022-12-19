import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {AppDispatch} from "../../app/store";
import {getUsers, reset, addMore} from "../../features/users/userSlice";
import {getOneUser, myOneUser} from "../../features/users/myUserSlice";
import Heading from "../../typography/Heading/Heading";
import Button from "../../atoms/Button/Button";

enum ButtonType {
  RESET = "reset",
  RELOAD = "reload",
  ADD = "add",
}

const buttonData = [ButtonType.RESET, ButtonType.RELOAD, ButtonType.ADD];

const Home = () => {
  const userState = useSelector(myOneUser);
  const dispatch = useDispatch<AppDispatch>();

  const renderButtonAction: Record<ButtonType, () => void> = {
    [ButtonType.RESET]: () => dispatch(reset()),
    [ButtonType.RELOAD]: () => dispatch(getUsers()),
    [ButtonType.ADD]: () => dispatch(addMore(userState.user.response)),
  };

  useEffect(() => {
    dispatch(getOneUser());
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
