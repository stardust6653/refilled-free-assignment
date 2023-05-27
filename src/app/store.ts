import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
