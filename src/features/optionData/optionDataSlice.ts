import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardItemProps } from "../../types/types";

interface OptionDataState {
  value: null | { payload: CardItemProps };
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
  },
});

export const { add } = optionDataSlice.actions;

export default optionDataSlice.reducer;
