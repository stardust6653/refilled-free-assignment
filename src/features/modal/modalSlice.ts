import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    on: (state) => {
      state.value = true;
    },
    off: (state) => {
      state.value = false;
    },
  },
});

export const { on, off } = modalSlice.actions;

export default modalSlice.reducer;
