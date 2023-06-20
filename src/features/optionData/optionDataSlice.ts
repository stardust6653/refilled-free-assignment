import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardItemProps } from "../../types/types";

// 카드 클릭 시 해당 상품 데이터를 상태로 저장
// optionData : 선택한 제품의 데이터
// add() : 리듀서가 실행될 때 인자로 받은 정보를 state에 저장함
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
