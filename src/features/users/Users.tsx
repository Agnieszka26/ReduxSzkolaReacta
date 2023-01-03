import React, { useEffect } from "react";
import type { AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, myusers } from "./userSlice";

const Users = () => {
  const usersState = useSelector(myusers);
  const dispatch = useDispatch<AppDispatch>();
  const fetchUsersInComponent = () => {
    console.log("fetchUsersInComponent");
    return dispatch(getUsers());
  };

  // const fetchData = () => {

  //    dispatch(getUsers());
  // }
  // useEffect(() => {

  // }, [dispatch]);

  const users = usersState?.response?.results;
  const isLoading = usersState.status;
  const renderUsers = () => {
    return isLoading === "loading" ? (
      <h2>LOADING . . . </h2>
    ) : (
      users?.map((user, i) => {
        console.log(user);
        return (
          <div key={i + user.id?.value}>
            <p>
              {i + 1}. {user.name?.first} {user.name?.last}
            </p>
          </div>
        );
      })
    );
  };
  return (
    <>
      <h1>Users</h1>
      {/* {isLoading === "loading" && <h2>LOADING . . . </h2>}; */}
      {(users ? renderUsers() : fetchUsersInComponent(), renderUsers())}
      {/* {isLoading === "loading" ? (
        <h2>LOADING . . . </h2>
      ) : usersState ? (
        renderUsers()
      ) : (
        fetchUsersInComponent()
      )} */}
    </>
  );
};

export default Users;
