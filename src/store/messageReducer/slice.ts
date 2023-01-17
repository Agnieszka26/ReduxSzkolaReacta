import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isOpen: boolean;
  type: "info" | "warning" | "danger" | "default";
  textContent: string;
}

const initialState: IInitialState = {
  isOpen: false,
  type: "default",
  textContent: "default",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    setWarning: (state, action: PayloadAction<string>) => {
      state.type = "warning";
      state.textContent = action.payload;
      state.isOpen = true;
    },
    setDanger: (state, action: PayloadAction<string>) => {
      state.type = "danger";
      state.textContent = action.payload;
      state.isOpen = true;
    },
    setInfo: (state, action: PayloadAction<string>) => {
      state.type = "info";
      state.textContent = action.payload;
      state.isOpen = true;
    },
    setDefault: (state) => {
      console.log("default");
      state.type = "default";
      state.textContent = "default";
    },
  },
});

export const { open, close, setWarning, setDanger, setInfo, setDefault } =
  messageSlice.actions;

export default messageSlice.reducer;
