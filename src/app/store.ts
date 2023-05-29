import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import modalSlice from "../features/modal/modalSlice";
import optionDataSlice from "../features/optionData/optionDataSlice";
import updateDataSlice from "../features/updateData/updateDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalSlice,
    optionData: optionDataSlice,
    updateData: updateDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
