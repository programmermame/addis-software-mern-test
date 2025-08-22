// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import audiobookReducer from "../features/audiobook/audiobookSlice";
import audiobookSaga from "../features/audiobook/audiobookSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    audiobook: audiobookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(audiobookSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
