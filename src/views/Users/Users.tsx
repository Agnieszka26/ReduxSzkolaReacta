import { useEffect } from "react";
import Chip from "../../components/Chip/Chip";
import { useAppDispatch, useAppSelector } from "../../store";
import { getUsers } from "../../store/usersReducer/slice";
import Heading from "../../typography/Heading/Heading";
import styles from "./Users.module.scss";

const Users = () => {
  const { response, pending } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!response) {
      dispatch(getUsers(10));
    }
  }, [dispatch, response]);

  return (
    <div className={styles.container}>
      <Heading text="Users" />
      <div className={styles.box}>
        <div>
          {pending ? (
            <Heading text="Loading ..." />
          ) : (
            response?.map(({ name, id, picture }, i) => (
              <div key={id.value + i}>
                {i + 1}.
                <Chip
                  name={name.first}
                  surname={name.last}
                  img={picture.thumbnail}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
