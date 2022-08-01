import { configureStore } from "@reduxjs/toolkit";
import monthlyBenefitReducer from "./slices/MonthlyBenefitSlice";
export const store = configureStore({
  reducer: {
    monthlyBenefit: monthlyBenefitReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
