import { createSlice } from "@reduxjs/toolkit";
// 모달 on/off를 위한 상태 관리
// on/off 리듀서를 활용 모달창 끄고 키기
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
