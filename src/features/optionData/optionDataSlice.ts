import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardItemProps } from "../../types/types";

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
    add: (state, payload: PayloadAction<CardItemProps>) => {
      state.value = payload;
    },
    clear: (state) => {
      state.value = null;
    },
  },
});

export const { add, clear } = optionDataSlice.actions;

export default optionDataSlice.reducer;
