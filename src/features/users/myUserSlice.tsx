import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { api } from "./userAPI";
import { UserDate } from "./userType";

interface IResponse {
  info: any;
  results: UserDate[];
}

interface IInitialState {
  response: IResponse | null;
  status: "success" | "loading" | "error";
}

const initialState: IInitialState = {
  response: null,
  status: "success",
};

export const getOneUser = createAsyncThunk("user/getUser", async () => {
  const response = await api.get("");
  //   console.log(response.data.results[0]);
  return response.data.results[0];
});

const oneUserSlice = createSlice({
  name: "oneUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.status = "success";
      state.response = action.payload;
      //   console.log(state.response);
    });
  },
});

export const myOneUser = (state: RootState) => state;

export default oneUserSlice.reducer;
