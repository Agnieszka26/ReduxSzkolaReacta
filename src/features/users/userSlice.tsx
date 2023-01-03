import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import produce from "immer";

import { api } from "./userAPI";
import { UserDate } from "./userType";
import { myOneUser } from "./myuserSlice";
import { useSelector } from "react-redux";

interface IResponse {
  info: any;
  results: UserDate[];
}

interface IMesssage {
  textContent: string;
  type: "info" | "warning" | "danger" | "default";
}

interface IInitialState {
  response: IResponse | null;
  status: "success" | "loading" | "error";
  message: IMesssage;
}

const initialState: IInitialState = {
  response: null,
  status: "loading",
  message: {
    textContent: "default",
    type: "default",
  },
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await api.get("?results=10");
  return response.data;
});

// export const getOneUser = createAsyncThunk("users/getUser", async () => {
//   const response = await api.get("");
//   return response.data;
// });

export const addOneMoreUser = (x: UserDate | undefined) => {
  // produce(initialState, (draftState) => {
  //   //@ts-ignore
  //   console.log(draftState);
  // draftState.response?.results.push(x);
  // console.log(initialState);
  // "mutate" the draft array
  // draftState.push({ todo: "Tweet about it" });
  // // "mutate" the nested state
  // draftState[1].done = true;
  // });
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.response = null;
    },
    addMore: (state, action) => {
      state.response?.results.push(action.payload);
      // console.log(
      //   "tu powinnam jakoś coś zrobić, żeby dodać jednoego usera do istniejącej array"
      // );
    },
    changeMessage: (state, action) => {
      console.log(" action.payload", action.payload);
      // state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.response = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { reset, addMore, changeMessage } = usersSlice.actions;
export const myusers = (state: RootState) => state.users;

export default usersSlice.reducer;
