import React, { useEffect } from "react";
import type { AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, myusers } from "./userSlice";

const Users = () => {
  const usersState = useSelector(myusers);
  const dispatch = useDispatch<AppDispatch>();
  const fetchUsersInComponent = () => {
    dispatch(getUsers());
  };
  // useEffect(() => {

  //   dispatch(getUsers());
  // }, [dispatch]);

  const users = usersState?.response?.results;
  const isLoading = usersState.status;
  console.log(users);
  return (
    <>
      <h1>Users</h1>
      {isLoading === "loading" ? (
        <h2>LOADING . . . </h2>
      ) : usersState ? (
        users?.map((user, i) => {
          return (
            <div key={user.id?.value}>
              <p>
                {i + 1}
                {user.name?.first} {user.name?.last}
              </p>
            </div>
          );
        })
      ) : (
        fetchUsersInComponent()
      )}
    </>
  );
};

export default Users;
