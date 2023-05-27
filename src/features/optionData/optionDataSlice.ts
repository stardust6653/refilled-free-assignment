import { createSlice } from "@reduxjs/toolkit";
import { DataProps } from "../../../pages/shop";

interface OptionDataState {
  value: any;
}

const initialState: OptionDataState = {
  value: null,
};

const optionDataSlice = createSlice({
  name: "optionData",
  initialState,
  reducers: {
    add: (state, payload) => {
      state.value = payload;
    },
    clear: (state) => {
      state.value = null;
    },
  },
});

export const { add, clear } = optionDataSlice.actions;

export default optionDataSlice.reducer;
