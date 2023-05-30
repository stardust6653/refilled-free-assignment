import { createSlice } from "@reduxjs/toolkit";

// 장바구니 수량 뱃지 업데이트를 위한 상태
// useEffect의 의존성 배열로 활용해 updateData의 상태가 변경될 때마다 장바구니 뱃지 데이터가 리렌더됨
interface updateDataState {
  value: boolean;
}

const initialState: updateDataState = {
  value: false,
};

const updateDataSlice = createSlice({
  name: "updateData",
  initialState,
  reducers: {
    update: (state) => {
      state.value = !state.value;
    },
  },
});

export const { update } = updateDataSlice.actions;

export default updateDataSlice.reducer;
