import { createSlice } from "@reduxjs/toolkit";

interface updateDataState {
  value: boolean;
}

const initialState: updateDataState = {
  value: false,
};

const updateDataSlice = createSlice({
  name: "updataData",
  initialState,
  reducers: {
    update: (state) => {
      state.value = !state.value;
    },
  },
});

export const { update } = updateDataSlice.actions;

export default updateDataSlice.reducer;
