import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../app/store";
import {
  getUsers,
  myusers,
  reset,
  addMore,
  addOneMoreUser,
} from "../users/userSlice";
import { getOneUser, myOneUser } from "../users/myuserSlice";

const Home = () => {
  const usersState = useSelector(myusers);
  const userState = useSelector(myOneUser);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getOneUser());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(reset());
  };
  const handleReload = () => {
    dispatch(getUsers());
  };
  const handleAddOneMore = () => {
    dispatch(addMore(userState.user.response));
  };

  return (
    <div>
      <h1>Home </h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReload}> Reload</button>
      <button onClick={handleAddOneMore}> Add</button>
    </div>
  );
};

export default Home;
