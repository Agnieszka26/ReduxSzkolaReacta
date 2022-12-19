import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/userSlice";
import userReducer from "../features/users/myUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
