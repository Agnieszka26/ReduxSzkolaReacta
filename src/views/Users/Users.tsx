import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/usersReducer/slice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";

const Users = () => {
  const { response, pending } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  // const fetchUsersInComponent = () => {
  //   dispatch(getUsers(10));
  // };
  useEffect(() => {
    dispatch(getUsers(10));
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>
      {pending ? (
        <h1>Loading ... </h1>
      ) : (
        response?.map(({ name, id }) => (
          <div key={id.value}>
            {name.first} + {name.last}
          </div>
        ))
      )}
    </>
  );
};

export default Users;
