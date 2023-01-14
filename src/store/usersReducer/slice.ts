import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../api";
import { UserDate } from "./userType";

interface IInitialState {
  response: UserDate[] | null;
  pending: boolean;
}

const initialState: IInitialState = {
  response: null,
  pending: false,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (resultNumber: number) => {
    const response = await api.get(`?results=${resultNumber}`);
    return response.data.results;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.response = null;
    },
    addMore: (state, action) => {
      // state.response?.results.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.response = action.payload;
        state.pending = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.pending = false;
      });
  },
});

export const { reset, addMore } = usersSlice.actions;

export default usersSlice.reducer;
