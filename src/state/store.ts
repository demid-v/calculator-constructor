import { configureStore } from "@reduxjs/toolkit";
import { dragReducer } from "./reducers/dragReducer";

const store = configureStore({
  reducer: {
    drag: dragReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
