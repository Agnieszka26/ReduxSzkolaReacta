import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getUsers } from "../../store/usersReducer/slice";

const Users = () => {
  const { response, pending } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!response) {
      dispatch(getUsers(10));
    }
  }, [dispatch, response]);

  return (
    <>
      <h1>Users</h1>
      {pending ? (
        <h1>Loading ... </h1>
      ) : (
        response?.map(({ name, id }, i) => (
          <div key={id.value + i}>
            {i + 1}. {name.first} {name.last}
          </div>
        ))
      )}
    </>
  );
};

export default Users;
